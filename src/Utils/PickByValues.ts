import type { EmptyArray } from '../Base/EmptyArray'
import type { UnknownArray } from '../Base/UnknownArray'
import type { UnknownObject } from '../Base/UnknownObject'
import type { UnknownTuple } from '../Base/UnknownTuple'
import type { IsEqual } from '../Guard/IsEqual'

import type { HasIntersection } from './HasIntersection'
import type { Prettify } from './Prettify'
import type { ToTuple } from './ToTuple'

type MatchValues<T1, T2, StrictMode extends PickByValuesOptions['isStrict']> = (
  StrictMode extends true ? IsEqual<T1, T2> : HasIntersection<T1, T2>
)

type PickByArrayValues<T, Values, Options extends PickByValuesOptions = PickByValuesOptions> = (
  T extends UnknownTuple
    ? T extends [infer Head, ...infer Tail]
      ? [PickByArrayValues<Head, Values, Options>, PickByArrayValues<Tail, Values, Options>] extends [infer RHead, infer RTail]
        ? [MatchValues<Head, Values, Options['isStrict']>] extends [true]
          ? [Head, ...Extract<RTail, UnknownTuple>]
          : [Options['isDeep'] extends true ? Head : unknown, RHead] extends [UnknownTuple, Exclude<UnknownTuple, EmptyArray>]
            ? [RHead, ...Extract<RTail, UnknownTuple>]
            : [...Extract<RTail, UnknownTuple>]
        : never
      : []
    : T extends UnknownArray
      ? PickByArrayValues<ToTuple<T[number]>, Values, Options>[number][]
      : never
)

type PickByObjectValues<T, Values, Options extends PickByValuesOptions = PickByValuesOptions> = (
  T extends UnknownObject
    ? Prettify<{
      [P in keyof T as (
        [Options['isStrict'] extends true ? IsEqual<T[P], Values> : HasIntersection<T[P], Values>] extends [true]
          ? P
          : [Options['isDeep'] extends true ? T[P] : unknown] extends [UnknownObject]
            ? keyof PickByObjectValues<T[P], Values, Options> extends never
              ? never
              : P
            : never
      )]: (
        [Options['isDeep'] extends true ? T[P] : unknown] extends [UnknownObject]
          ? [Options['isStrict'] extends true ? IsEqual<T[P], Values> : HasIntersection<T[P], Values>] extends [true]
            ? T[P]
            : PickByObjectValues<T[P], Values, Options>
          : T[P]
      )
    }>
    : never
)

export type PickByValuesOptions = {
  isDeep?: boolean
  isStrict?: boolean
}

export type PickByValues<T, Values, Options extends PickByValuesOptions = PickByValuesOptions> = (
  T extends UnknownArray
    ? PickByArrayValues<T, Values, Options>
    : T extends UnknownObject
      ? PickByObjectValues<T, Values, Options>
      : never
)
