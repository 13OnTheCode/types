import type { TypeMatch } from '../Utils/TypeMatch'

export type IsNullable<T> = TypeMatch<T, null | undefined>
