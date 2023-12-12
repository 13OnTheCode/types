import type { UnknownObject } from '../Base/UnknownObject'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsObject<T> = (
  [T, IsAnyOrNever<T>] extends [UnknownObject, false]
    ? true
    : false
)
