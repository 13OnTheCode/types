import type { IsExtends } from './IsExtends'

export type IsBigintLiteral<T> = (
  [IsExtends<T, bigint>, IsExtends<bigint, T>] extends [true, false]
    ? true
    : false
)
