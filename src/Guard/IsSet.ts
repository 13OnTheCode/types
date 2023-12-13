import type { UnknownSet } from '../Base/UnknownSet'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsSet<T> = TypeMatch<T, UnknownSet>
