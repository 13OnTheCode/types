import type { EmptySet } from '../Base/EmptySet'

import type { IsExtends } from './IsExtends'

export type IsEmptySet<T> = IsExtends<T, EmptySet>
