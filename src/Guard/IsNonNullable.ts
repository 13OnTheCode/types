import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'
import type { IsNullable } from './IsNullable'
import type { IsUnknown } from './IsUnknown'

export type IsNonNullable<T> = (
  [IsNullable<T>, IsAny<T> | IsNever<T> | IsUnknown<T>] extends [false, false]
    ? true
    : false
)
