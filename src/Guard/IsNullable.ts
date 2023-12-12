import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsNullable<T> = (
  [NonNullable<T>, IsAnyOrNever<T>] extends [never, false]
    ? true
    : false
)
