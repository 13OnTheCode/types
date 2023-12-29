import type { Primitive } from '../Base/Primitive'

import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsPrimitive<T> = (
  [IsExtends<T, Primitive>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
