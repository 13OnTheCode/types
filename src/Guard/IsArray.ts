import type { UnknownArray } from '../Base/UnknownArray'

import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsArray<T> = (
  [T, IsAnyOrNever<T>] extends [UnknownArray, false]
    ? true
    : false
)
