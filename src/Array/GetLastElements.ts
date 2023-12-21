import type { UnknownArray } from '../Base/UnknownArray'

export type GetLastElements<T extends UnknownArray> = (
  T extends UnknownArray
    ? T extends Readonly<[infer Last]>
      ? Last
      : T extends Readonly<[unknown, ...infer Tail]>
        ? GetLastElements<Tail>
        : T[number]
    : never
)
