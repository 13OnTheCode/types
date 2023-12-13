import type { Primitive } from '../Base/Primitive'

import type { IsEqual } from './IsEqual'
import type { IsType } from './IsType'

export type IsLiteral<T1, T2 extends Primitive = Primitive> = (
  [IsType<T1, T2> | IsType<T2, T2>, IsType<T2, T1>] extends [true, IsEqual<T2, null> | IsEqual<T2, undefined>]
    ? true
    : false
)
