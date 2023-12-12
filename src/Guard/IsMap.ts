import type { UnknownMap } from '../Base/UnknownMap'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsMap<T> = (
  [T, IsAnyOrNever<T>] extends [UnknownMap, false]
    ? true
    : false
)
