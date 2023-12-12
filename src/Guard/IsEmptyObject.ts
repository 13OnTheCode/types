import type { EmptyObject } from '../Base/EmptyObject'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsEmptyObject<T> = (
  [T, IsAnyOrNever<T>] extends [EmptyObject, false]
    ? true
    : false
)
