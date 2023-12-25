import type { IsExtends } from './IsExtends'

export type IsNullable<T> = IsExtends<T, null | undefined>
