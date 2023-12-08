import type { UnknownArray } from '../Base/UnknownArray'

import type { IsAny } from './IsAny'
import type { IsNever } from './IsNever'

export type IsArray<T> = (
  [T, IsAny<T> | IsNever<T>] extends [UnknownArray, false]
    ? true
    : false
)
