import type { IsBoolean } from '../Guard/IsBoolean'
import type { IsUnion } from '../Guard/IsUnion'

import type { UnionToIntersection } from './UnionToIntersection'

export type ToTuple<T> = (
  [IsUnion<T>, IsBoolean<T>] extends [true, false]
    ? UnionToIntersection<T extends unknown ? (x: T) => T : never> extends ((x: never) => infer U)
      ? [...ToTuple<Exclude<T, U>>, U]
      : []
    : [T]
)
