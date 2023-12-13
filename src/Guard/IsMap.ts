import type { UnknownMap } from '../Base/UnknownMap'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsMap<T> = TypeMatch<T, UnknownMap>
