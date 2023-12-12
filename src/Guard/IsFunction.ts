import type { UnknownFunction } from '../Base/UnknownFunction'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsFunction<T> = (
  [T, IsAnyOrNever<T>] extends [UnknownFunction, false]
    ? true
    : false
)
