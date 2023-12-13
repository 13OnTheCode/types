import type { EmptyObject } from '../Base/EmptyObject'

import type { isType } from './isType'

export type IsEmptyObject<T> = isType<T, EmptyObject>
