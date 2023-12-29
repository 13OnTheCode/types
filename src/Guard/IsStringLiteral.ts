import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsStringLiteral<T> = (
  [IsExtends<T, string>, IsExtends<string, T>, IsNever<T>] extends [true, false, false]
    ? true
    : false
)
