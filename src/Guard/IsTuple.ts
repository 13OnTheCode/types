import type { UnknownArray } from '../Base/UnknownArray'

import type { IsExtends } from './IsExtends'
import type { IsNever } from './IsNever'

export type IsTuple<T> = (
  [IsExtends<Required<T>, UnknownArray>, IsExtends<never[], Required<T>>, IsNever<T>] extends [true, false, false]
    ? true
    : false
)
