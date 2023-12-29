import type { UnknownArray } from '../Base/UnknownArray'

export type ToUnion<T> = (
  T extends UnknownArray
    ? T[number]
    : never
)
