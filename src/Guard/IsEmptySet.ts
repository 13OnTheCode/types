import type { EmptySet } from '../Base/EmptySet'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsEmptySet<T> = (
  [T, IsAnyOrNever<T>] extends [EmptySet, false]
    ? true
    : false
)
