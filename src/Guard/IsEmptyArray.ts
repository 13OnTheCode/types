import type { EmptyArray } from '../Base/EmptyArray'

import type { isType } from './isType'

export type IsEmptyArray<T> = isType<T, EmptyArray>
