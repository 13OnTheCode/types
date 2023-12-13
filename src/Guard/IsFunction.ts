import type { UnknownFunction } from '../Base/UnknownFunction'

import type { isType } from './isType'

export type IsFunction<T> = isType<T, UnknownFunction>
