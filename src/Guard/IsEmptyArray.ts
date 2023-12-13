import type { EmptyArray } from '../Base/EmptyArray'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsEmptyArray<T> = TypeMatch<T, EmptyArray>
