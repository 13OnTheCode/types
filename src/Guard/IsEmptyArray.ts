import type { EmptyArray } from '../Base/EmptyArray'

import type { IsType } from './IsType'

export type IsEmptyArray<T> = IsType<T, EmptyArray>
