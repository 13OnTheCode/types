import type { UnknownArray } from '../Base/UnknownArray'
import type { IsTuple } from '../Guard/IsTuple'

export type GetIndexs<T extends UnknownArray> = (
  T extends UnknownArray
    ? [IsTuple<T>, Exclude<Partial<T>['length'], Required<T>['length']>] extends [true, infer Indexs]
      ? [Indexs] extends [never]
        ? number
        : Indexs
      : number
    : never
)
