import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsAnyOrNever<T> = (
  [IsAny<T> | IsNever<T>] extends [false]
    ? false
    : true
)
