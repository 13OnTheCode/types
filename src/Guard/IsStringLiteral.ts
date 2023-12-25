import type { IsExtends } from './IsExtends'

export type IsStringLiteral<T> = (
  [IsExtends<T, string>, IsExtends<string, T>] extends [true, false]
    ? true
    : false
)
