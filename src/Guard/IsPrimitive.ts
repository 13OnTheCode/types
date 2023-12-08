import type { Primitive } from '../Base/Primitive'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsPrimitive<T> = (
  [T, IsAny<T> | IsNever<T>] extends [Primitive, false]
    ? true
    : false
)
