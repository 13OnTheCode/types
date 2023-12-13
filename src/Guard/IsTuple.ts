import type { UnknownTuple } from '../Base/UnknownTuple'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsTuple<T> = TypeMatch<T, UnknownTuple>
