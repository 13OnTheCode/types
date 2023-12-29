import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsSymbolLiteral<T> = (
  [IsExtends<T, symbol>, IsExtends<symbol, T>, IsNever<T>] extends [true, false, false]
    ? true
    : false
)
