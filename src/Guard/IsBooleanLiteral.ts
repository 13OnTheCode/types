import type { IsExtends } from './IsExtends'

export type IsBooleanLiteral<T> = (
  [IsExtends<T, boolean>, IsExtends<boolean, T>] extends [true, false]
    ? true
    : false
)
