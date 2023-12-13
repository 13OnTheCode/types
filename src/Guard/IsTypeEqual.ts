import type { Primitive } from '../Base/Primitive'

import type { IsEqual } from './IsEqual'

type IsAnyOrNever<T> = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [IsEqual<T, any> | IsEqual<T, never>] extends [false]
    ? false
    : true
)

export type IsTypeEqual<T1, T2> = (
  [IsAnyOrNever<T2>] extends [true]
    ? IsEqual<T1, T2>
    : [T2] extends [Primitive]
      ? IsEqual<T1, T2>
      : [T1, IsAnyOrNever<T1>] extends [T2, false]
        ? true
        : false
)
