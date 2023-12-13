import type { isType } from './isType'

export type IsBooleanLiteral<T> = (
  [isType<T, boolean>, isType<[boolean], [T]>] extends [true, false]
    ? true
    : false
)
