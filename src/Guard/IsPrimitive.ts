import type { Primitive } from '../Base/Primitive'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsPrimitive<T> = (
  [T, IsAnyOrNever<T>] extends [Primitive, false]
    ? true
    : false
)
