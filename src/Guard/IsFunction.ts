import type { UnknownFunction } from '../Base/UnknownFunction'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsFunction<T> = TypeMatch<T, UnknownFunction>
