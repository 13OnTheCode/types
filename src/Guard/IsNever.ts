import type { IsEqual } from './IsEqual'

export type IsNever<T> = IsEqual<T, never>
