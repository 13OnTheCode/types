import type { IsEqual } from './IsEqual'

export type IsUnknown<T> = IsEqual<T, unknown>
