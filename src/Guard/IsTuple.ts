import type { UnknownArray } from '../Base/UnknownArray'

import type { IsExtends } from './IsExtends'

export type IsTuple<T> = (
  [IsExtends<Required<T>, UnknownArray>, IsExtends<never[], Required<T>>] extends [true, false]
    ? true
    : false
)
