import type { UnknownArray } from '../Base/UnknownArray'

import type { IsExtends } from './IsExtends'

export type IsArray<T> = IsExtends<T, UnknownArray>
