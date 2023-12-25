import type { UnknownFunction } from '../Base/UnknownFunction'

import type { IsExtends } from './IsExtends'

export type IsFunction<T> = IsExtends<T, UnknownFunction>
