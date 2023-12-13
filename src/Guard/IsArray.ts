import type { UnknownArray } from '../Base/UnknownArray'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsArray<T> = TypeMatch<T, UnknownArray>
