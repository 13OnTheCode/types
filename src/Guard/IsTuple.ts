import type { UnknownTuple } from '../Base/UnknownTuple'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsTuple<T> = (
  [T, IsAny<T> | IsNever<T>] extends [UnknownTuple, false]
    ? true
    : false
)
