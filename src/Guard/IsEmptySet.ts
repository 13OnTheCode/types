import type { EmptySet } from '../Base/EmptySet'

import type { isType } from './isType'

export type IsEmptySet<T> = isType<T, EmptySet>
