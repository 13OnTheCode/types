import type { UnknownArray } from '../Base/UnknownArray'

import type { IsExtends } from './IsExtends'

export type IsTuple<T> = (
  [IsExtends<T, UnknownArray>, IsExtends<never[], T>] extends [true, false]
    ? true
    : false
)
