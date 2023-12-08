import type { UnknownAsyncFunction } from '../Base/UnknownAsyncFunction'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsAsyncFunction<T> = (
  [T, IsAny<T> | IsNever<T>] extends [UnknownAsyncFunction, false]
    ? true
    : false
)
