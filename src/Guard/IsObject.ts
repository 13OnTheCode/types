import type { UnknownObject } from '../Base/UnknownObject'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsObject<T> = (
  [T, IsAny<T> | IsNever<T>] extends [UnknownObject, false]
    ? true
    : false
)
