import type { UnknownSet } from '../Base/UnknownSet'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsSet<T> = (
  [T, IsAny<T> | IsNever<T>] extends [UnknownSet, false]
    ? true
    : false
)
