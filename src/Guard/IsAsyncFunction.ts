import type { UnknownAsyncFunction } from '../Base/UnknownAsyncFunction'

import type { isType } from './isType'

export type IsAsyncFunction<T> = isType<T, UnknownAsyncFunction>
