import type { EmptyRecord } from '../Base/EmptyRecord'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsEmptyRecord<T> = (
  [T, IsAny<T> | IsNever<T>] extends [EmptyRecord, false]
    ? true
    : false
)
