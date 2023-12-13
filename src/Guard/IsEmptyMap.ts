import type { EmptyMap } from '../Base/EmptyMap'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsEmptyMap<T> = TypeMatch<T, EmptyMap>
