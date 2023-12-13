import type { UnknownObject } from '../Base/UnknownObject'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsObject<T> = TypeMatch<T, UnknownObject>
