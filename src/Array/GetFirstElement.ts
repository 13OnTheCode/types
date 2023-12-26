import type { UnknownArray } from '../Base/UnknownArray'

export type GetFirstElement<T extends UnknownArray> = (
  T extends UnknownArray
    ? T['length'] extends 0
      ? never
      : T[0]
    : never
)
