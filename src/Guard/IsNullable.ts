import type { IsType } from './IsType'

export type IsNullable<T> = IsType<T, null | undefined>
