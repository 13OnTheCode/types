import type { isType } from './isType'

export type IsSymbolLiteral<T> = (
  [isType<T, symbol>, isType<symbol, T>] extends [true, false]
    ? true
    : false
)
