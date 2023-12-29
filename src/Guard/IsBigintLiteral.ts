import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsBigintLiteral<T> = (
  [IsExtends<T, bigint>, IsExtends<bigint, T>, IsNever<T>] extends [true, false, false]
    ? true
    : false
)
