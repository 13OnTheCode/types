import type { UnknownArray } from '../Base/UnknownArray'
import type { UnknownTuple } from '../Base/UnknownTuple'

export type ToUnion<T> = (
  T extends UnknownArray | UnknownTuple
    ? T[number]
    : never
)
