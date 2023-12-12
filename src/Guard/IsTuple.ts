import type { UnknownTuple } from '../Base/UnknownTuple'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsTuple<T> = (
  [T, IsAnyOrNever<T>] extends [UnknownTuple, false]
    ? true
    : false
)
