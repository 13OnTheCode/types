import type { UnknownArray } from '../Base/UnknownArray'

export type GetLast<T extends UnknownArray> = (
  T extends UnknownArray
    ? T extends Readonly<[infer Last]>
      ? Last
      : T extends Readonly<[unknown, ...infer Tail]>
        ? GetLast<Tail>
        : T[number]
    : never
)
