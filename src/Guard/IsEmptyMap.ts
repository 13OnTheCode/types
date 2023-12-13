import type { EmptyMap } from '../Base/EmptyMap'

import type { isType } from './isType'

export type IsEmptyMap<T> = isType<T, EmptyMap>
