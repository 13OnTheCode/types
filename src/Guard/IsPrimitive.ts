import type { Primitive } from '../Base/Primitive'

import type { IsExtends } from './IsExtends'

export type IsPrimitive<T> = IsExtends<T, Primitive>
