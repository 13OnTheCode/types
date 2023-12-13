import type { isType } from './isType'

export type IsNumberLiteral<T> = (
  [isType<T, number>, isType<number, T>] extends [true, false]
    ? true
    : false
)
