import type { UnknownSet } from '../Base/UnknownSet'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsSet<T> = (
  [T, IsAnyOrNever<T>] extends [UnknownSet, false]
    ? true
    : false
)
