import type { UnknownAsyncFunction } from '../Base/UnknownAsyncFunction'

import type { IsType } from './IsType'

export type IsAsyncFunction<T> = IsType<T, UnknownAsyncFunction>
