import type { EmptyObject } from '../Base/EmptyObject'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsEmptyObject<T> = (
  [T, IsAny<T> | IsNever<T>] extends [EmptyObject, false]
    ? true
    : false
)
