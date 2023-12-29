import type { UnknownObject } from '../Base/UnknownObject'

import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsObject<T> = (
  [IsExtends<T, UnknownObject>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
