import type { IsAnyOrNever } from './IsAnyOrNever'
import type { IsNullable } from './IsNullable'

export type IsNonNullable<T> = (
  [IsNullable<T>, IsAnyOrNever<T>] extends [false, false]
    ? true
    : false
)
