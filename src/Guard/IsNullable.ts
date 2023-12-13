import type { isType } from './isType'

export type IsNullable<T> = isType<T, null | undefined>
