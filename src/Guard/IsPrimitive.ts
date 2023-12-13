import type { Primitive } from '../Base/Primitive'

import type { IsType } from './IsType'

export type IsPrimitive<T> = IsType<T, Primitive>
