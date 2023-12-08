import type { IsEqual } from './IsEqual'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IsAny<T> = IsEqual<T, any>
