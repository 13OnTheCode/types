import type { UnknownObject } from '../Base/UnknownObject'

import type { isType } from './isType'

export type IsObject<T> = isType<T, UnknownObject>
