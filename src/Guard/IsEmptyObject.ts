import type { EmptyObject } from '../Base/EmptyObject'

import type { IsAny } from './IsAny'
import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsEmptyObject<T> = (
  [IsExtends<T, EmptyObject>, IsAny<T> | IsNever<T>] extends [true, false]
    ? true
    : false
)
