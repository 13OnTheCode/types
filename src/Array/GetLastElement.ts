import type { UnknownArray } from '../Base/UnknownArray'

export type GetLastElement<T extends UnknownArray> = (
  T extends UnknownArray
    ? T extends Readonly<[infer Last]>
      ? Last
      : T extends Readonly<[unknown, ...infer Tail]>
        ? GetLastElement<Tail>
        : T[number]
    : never
)
