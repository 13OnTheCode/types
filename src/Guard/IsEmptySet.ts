import type { EmptySet } from '../Base/EmptySet'

import type { IsType } from './IsType'

export type IsEmptySet<T> = IsType<T, EmptySet>
