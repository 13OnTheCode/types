import type { UnknownFunction } from '../Base/UnknownFunction'

import type { IsType } from './IsType'

export type IsFunction<T> = IsType<T, UnknownFunction>
