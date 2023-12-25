import type { IsExtends } from './IsExtends'

export type IsSymbolLiteral<T> = (
  [IsExtends<T, symbol>, IsExtends<symbol, T>] extends [true, false]
    ? true
    : false
)
