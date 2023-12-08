import type { EmptyMap } from '../Base/EmptyMap'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsEmptyMap<T> = (
  [T, IsAny<T> | IsNever<T>] extends [EmptyMap, false]
    ? true
    : false
)
