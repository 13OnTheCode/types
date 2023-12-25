import type { EmptyArray } from '../Base/EmptyArray'

import type { IsExtends } from './IsExtends'

export type IsEmptyArray<T> = IsExtends<T, EmptyArray>
