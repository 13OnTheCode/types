import type { Primitive } from '../Base/Primitive'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsPrimitive<T> = TypeMatch<T, Primitive>
