import type { UnknownArray } from '../Base/UnknownArray'

export type GetLastElement<T extends UnknownArray> = (
  T extends UnknownArray
    ? T extends Readonly<[unknown?, ...infer Rest]>
      ? Rest extends Readonly<[]>
        ? T[number]
        : Required<Rest> extends Readonly<[unknown, ...unknown[]]>
          ? GetLastElement<Rest>
          : T[number]
      : never
    : never
)
