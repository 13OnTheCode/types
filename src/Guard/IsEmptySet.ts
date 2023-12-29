import type { EmptySet } from '../Base/EmptySet'

import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsEmptySet<T> = (
  [IsExtends<T, EmptySet>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
