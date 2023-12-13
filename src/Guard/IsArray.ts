import type { UnknownArray } from '../Base/UnknownArray'

import type { isType } from './isType'

export type IsArray<T> = isType<T, UnknownArray>
