import type { UnknownFunction } from '../Base/UnknownFunction'

import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsFunction<T> = (
  [IsExtends<T, UnknownFunction>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
