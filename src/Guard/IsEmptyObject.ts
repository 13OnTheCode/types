import type { EmptyObject } from '../Base/EmptyObject'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsEmptyObject<T> = TypeMatch<T, EmptyObject>
