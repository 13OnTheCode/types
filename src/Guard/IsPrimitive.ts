import type { Primitive } from '../Base/Primitive'

import type { isType } from './isType'

export type IsPrimitive<T> = isType<T, Primitive>
