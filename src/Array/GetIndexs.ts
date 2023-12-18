import type { UnknownArray } from '../Base/UnknownArray'

export type GetIndexs<T extends UnknownArray> = (
  T extends UnknownArray
    ? Exclude<Partial<T>['length'], T['length']>
    : never
)
