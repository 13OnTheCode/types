import type { IsAny } from './IsAny'
import type { IsEqual } from './IsEqual'
import type { IsNever } from './IsNever'
import type { IsUnknown } from './IsUnknown'

export type IsExtends<T1, T2> = (
  [IsEqual<T1, T2>] extends [true]
    ? true
    : [T1, IsAny<T1> | IsNever<T1> | IsUnknown<T1>] extends [T2, false]
      ? true
      : false
)
