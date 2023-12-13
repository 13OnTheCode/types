import type { isType } from './isType'

export type IsStringLiteral<T> = (
  [isType<T, string>, isType<string, T>] extends [true, false]
    ? true
    : false
)
