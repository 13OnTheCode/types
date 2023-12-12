import type { EmptyRecord } from '../Base/EmptyRecord'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsEmptyRecord<T> = (
  [T, IsAnyOrNever<T>] extends [EmptyRecord, false]
    ? true
    : false
)
