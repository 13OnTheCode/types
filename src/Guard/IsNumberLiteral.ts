import type { IsExtends } from './IsExtends'

export type IsNumberLiteral<T> = (
  [IsExtends<T, number>, IsExtends<number, T>] extends [true, false]
    ? true
    : false
)
