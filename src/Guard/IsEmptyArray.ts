import type { EmptyArray } from '../Base/EmptyArray'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsEmptyArray<T> = (
  [T, IsAnyOrNever<T>] extends [EmptyArray, false]
    ? true
    : false
)
