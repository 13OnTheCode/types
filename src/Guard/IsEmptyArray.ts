import type { EmptyArray } from '../Base/EmptyArray'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsEmptyArray<T> = (
  [T, IsAny<T> | IsNever<T>] extends [EmptyArray, false]
    ? true
    : false
)
