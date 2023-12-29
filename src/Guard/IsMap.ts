import type { UnknownMap } from '../Base/UnknownMap'

import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsMap<T> = (
  [IsExtends<T, UnknownMap>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
