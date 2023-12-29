import type { IsEqual } from './IsEqual'

export type IsContains<T1, T2> = (
  [Extract<T1, T2>] extends [never]
    ? IsEqual<T1, T2>
    : true
)
