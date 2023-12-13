import type { EmptyMap } from '../Base/EmptyMap'

import type { IsType } from './IsType'

export type IsEmptyMap<T> = IsType<T, EmptyMap>
