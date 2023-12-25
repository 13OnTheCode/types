import type { EmptyMap } from '../Base/EmptyMap'

import type { IsExtends } from './IsExtends'

export type IsEmptyMap<T> = IsExtends<T, EmptyMap>
