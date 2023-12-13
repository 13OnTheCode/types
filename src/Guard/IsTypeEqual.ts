import type { Primitive } from '../Base/Primitive'

import type { IsEqual } from './IsEqual'

type IsUnspecificType<T> = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [IsEqual<T, any> | IsEqual<T, never> | IsEqual<T, unknown>] extends [false]
    ? false
    : true
)

export type IsTypeEqual<T1, T2> = (
  [IsUnspecificType<T2>] extends [true]
    ? IsEqual<T1, T2>
    : [T2] extends [Primitive]
      ? IsEqual<T1, T2>
      : [T1, IsUnspecificType<T1>] extends [T2, false]
        ? true
        : false
)
