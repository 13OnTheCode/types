import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsBooleanLiteral<T> = (
  [IsExtends<T, boolean>, IsExtends<boolean, T>, IsNever<T>] extends [true, false, false]
    ? true
    : false
)
