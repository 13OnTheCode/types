import type { IsNullable } from './IsNullable'

export type IsNonNullable<T> = (
  [IsNullable<T>] extends [false]
    ? true
    : false
)
