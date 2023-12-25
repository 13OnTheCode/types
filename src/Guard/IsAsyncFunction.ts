import type { UnknownAsyncFunction } from '../Base/UnknownAsyncFunction'

import type { IsExtends } from './IsExtends'

export type IsAsyncFunction<T> = IsExtends<T, UnknownAsyncFunction>
