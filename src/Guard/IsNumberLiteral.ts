import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsNumberLiteral<T> = (
  [IsExtends<T, number>, IsExtends<number, T>, IsNever<T>] extends [true, false, false]
    ? true
    : false
)
