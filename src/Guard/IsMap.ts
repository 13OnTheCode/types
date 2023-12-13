import type { UnknownMap } from '../Base/UnknownMap'

import type { isType } from './isType'

export type IsMap<T> = isType<T, UnknownMap>
