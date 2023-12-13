import type { IsType } from './IsType'

export type IsNonNullable<T> = IsType<T, NonNullable<T>>
