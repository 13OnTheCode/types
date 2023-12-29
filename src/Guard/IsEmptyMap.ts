import type { EmptyMap } from '../Base/EmptyMap'

import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsEmptyMap<T> = (
  [IsExtends<T, EmptyMap>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
