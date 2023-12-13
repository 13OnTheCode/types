import type { Primitive } from '../Base/Primitive'

import type { IsEqual } from './IsEqual'
import type { isType } from './isType'

export type IsLiteral<T1, T2 extends Primitive = Primitive> = (
  [isType<T1, T2> | isType<T2, T2>, isType<T2, T1>] extends [true, IsEqual<T2, null> | IsEqual<T2, undefined>]
    ? true
    : false
)
