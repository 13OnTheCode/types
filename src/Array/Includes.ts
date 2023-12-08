import type { UnknownArray } from '../Base/UnknownArray'
import type { IsEqual } from '../Guard/IsEqual'

export type Includes<T extends UnknownArray, Element> = (
  T extends UnknownArray
    ? T extends Readonly<[infer Head, ...infer Tail]>
      ? IsEqual<Head, Element> extends true
        ? true
        : Includes<Tail, Element>
      : false
    : never
)
