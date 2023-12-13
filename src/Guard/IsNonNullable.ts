import type { isType } from './isType'

export type IsNonNullable<T> = isType<T, NonNullable<T>>
