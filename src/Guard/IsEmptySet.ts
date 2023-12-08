import type { EmptySet } from '../Base/EmptySet'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsEmptySet<T> = (
  [T, IsAny<T> | IsNever<T>] extends [EmptySet, false]
    ? true
    : false
)
