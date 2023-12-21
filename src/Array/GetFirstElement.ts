import type { UnknownArray } from '../Base/UnknownArray'

export type GetFirstElement<T extends UnknownArray> = (
  T extends UnknownArray
    ? T extends Readonly<[infer Head, ...unknown[]]>
      ? Head
      : T[number]
    : never
)
