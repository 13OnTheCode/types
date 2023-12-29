import type { EmptyArray } from '../Base/EmptyArray'

import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsEmptyArray<T> = (
  [IsExtends<T, EmptyArray>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
