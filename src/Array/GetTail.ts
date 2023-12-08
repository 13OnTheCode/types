import type { UnknownArray } from '../Base/UnknownArray'

export type GetTail<T extends UnknownArray> = (
  T extends UnknownArray
    ? T extends Readonly<[unknown, ...infer Tail]>
      ? Tail
      : T
    : never
)
