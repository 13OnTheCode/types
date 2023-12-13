import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'
import type { IsUnknown } from './IsUnknown'

export type IsType<T1, T2> = (
  [T1, IsAny<T1> | IsNever<T1> | IsUnknown<T1>] extends [T2, false]
    ? true
    : false
)
