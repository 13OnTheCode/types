import type { UnknownMap } from '../Base/UnknownMap'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsMap<T> = (
  [T, IsAny<T> | IsNever<T>] extends [UnknownMap, false]
    ? true
    : false
)
