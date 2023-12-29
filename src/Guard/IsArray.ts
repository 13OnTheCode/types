import type { UnknownArray } from '../Base/UnknownArray'

import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsArray<T> = (
  [IsExtends<T, UnknownArray>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
