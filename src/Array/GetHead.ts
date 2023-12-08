import type { UnknownArray } from '../Base/UnknownArray'

export type GetHead<T extends UnknownArray> = (
  T extends UnknownArray
    ? T extends Readonly<[infer Head, ...unknown[]]>
      ? Head
      : T[number]
    : never
)
