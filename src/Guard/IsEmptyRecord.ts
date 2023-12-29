import type { EmptyRecord } from '../Base/EmptyRecord'

import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsEmptyRecord<T> = (
  [IsExtends<T, EmptyRecord>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
