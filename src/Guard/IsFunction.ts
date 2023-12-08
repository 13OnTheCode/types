import type { UnknownFunction } from '../Base/UnknownFunction'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsFunction<T> = (
  [T, IsAny<T> | IsNever<T>] extends [UnknownFunction, false]
    ? true
    : false
)
