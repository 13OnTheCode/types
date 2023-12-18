import type { UnknownTuple } from '../Base/UnknownTuple'

export type TupleToUnion<T extends UnknownTuple> = (
  T extends UnknownTuple
    ? T[number]
    : never
)
