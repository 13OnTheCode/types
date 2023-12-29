import type { UnknownSet } from '../Base/UnknownSet'

import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsSet<T> = (
  [IsExtends<T, UnknownSet>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
