import type { UnknownAsyncFunction } from '../Base/UnknownAsyncFunction'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsAsyncFunction<T> = (
  [T, IsAnyOrNever<T>] extends [UnknownAsyncFunction, false]
    ? true
    : false
)
