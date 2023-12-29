import type { UnknownAsyncFunction } from '../Base/UnknownAsyncFunction'

import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsAsyncFunction<T> = (
  [IsExtends<T, UnknownAsyncFunction>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
