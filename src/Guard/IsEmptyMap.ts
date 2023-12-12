import type { EmptyMap } from '../Base/EmptyMap'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsEmptyMap<T> = (
  [T, IsAnyOrNever<T>] extends [EmptyMap, false]
    ? true
    : false
)
