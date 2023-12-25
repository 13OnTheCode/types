import type { EmptyObject } from '../Base/EmptyObject'

import type { IsExtends } from './IsExtends'

export type IsEmptyObject<T> = IsExtends<T, EmptyObject>
