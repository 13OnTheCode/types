import type { UnknownArray } from '../Base/UnknownArray'
import type { UnknownObject } from '../Base/UnknownObject'
import type { UnknownTuple } from '../Base/UnknownTuple'
import type { IsEqual } from '../Guard/IsEqual'

import type { HasIntersection } from './HasIntersection'
import type { Prettify } from './Prettify'
import type { UnionToTuple } from './UnionToTuple'

type MatchValues<T1, T2, StrictMode extends OmitByValuesOptions['isStrict']> = (
  StrictMode extends true ? IsEqual<T1, T2> : HasIntersection<T1, T2>
)

type OmitByArrayValues<T, Values, Options extends OmitByValuesOptions = OmitByValuesOptions> = (
  T extends UnknownTuple
    ? T extends [infer Head, ...infer Tail]
      ? [OmitByArrayValues<Head, Values, Options>, OmitByArrayValues<Tail, Values, Options>] extends [infer RHead, infer RTail]
        ? [MatchValues<Head, Values, Options['isStrict']>] extends [true]
          ? RTail
          : [Options['isDeep'] extends true ? Head : unknown] extends [UnknownTuple]
            ? [MatchValues<RHead, Values, Options['isStrict']>] extends [true]
              ? RTail
              : [RHead, ...Extract<RTail, UnknownTuple>]
            : [Head, ...Extract<RTail, UnknownTuple>]
        : never
      : []
    : T extends UnknownArray
      ? OmitByArrayValues<UnionToTuple<T[number]>, Values, Options>[number][]
      : never
)

type OmitByObjectValues<T, Values, Options extends OmitByValuesOptions = OmitByValuesOptions> = (
  T extends UnknownObject
    ? Prettify<{
      [P in keyof T as (
        [MatchValues<T[P], Values, Options['isStrict']>] extends [true]
          ? never
          : [Options['isDeep'] extends true ? T[P] : unknown] extends [UnknownObject]
            ? [MatchValues<OmitByObjectValues<T[P], Values, Options>, Values, Options['isStrict']>] extends [true]
              ? never
              : P
            : P
      )]: (
        [Options['isDeep'] extends true ? T[P] : unknown] extends [UnknownObject]
          ? OmitByObjectValues<T[P], Values, Options>
          : T[P]
      )
    }>
    : never
)

export type OmitByValuesOptions = {
  isDeep?: boolean
  isStrict?: boolean
}

export type OmitByValues<T, Values, Options extends OmitByValuesOptions = OmitByValuesOptions> = (
  T extends UnknownArray
    ? OmitByArrayValues<T, Values, Options>
    : T extends UnknownObject
      ? OmitByObjectValues<T, Values, Options>
      : never
)
