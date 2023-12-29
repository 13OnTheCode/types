import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsNullable<T> = (
  [IsExtends<T, null | undefined>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
