import type { UnknownAsyncFunction } from '../Base/UnknownAsyncFunction'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsAsyncFunction<T> = TypeMatch<T, UnknownAsyncFunction>
