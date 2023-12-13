import type { IsAny } from '../Guard/IsAny'
import type { IsNever } from '../Guard/IsNever'
import type { IsUnknown } from '../Guard/IsUnknown'

export type TypeMatch<T1, T2> = (
  [T1, IsAny<T1> | IsNever<T1> | IsUnknown<T1>] extends [T2, false]
    ? true
    : false
)
