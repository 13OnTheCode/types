import type { EmptySet } from '../Base/EmptySet'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsEmptySet<T> = TypeMatch<T, EmptySet>
