import type { UnknownObject } from '../Base/UnknownObject'

import type { IsExtends } from './IsExtends'

export type IsObject<T> = IsExtends<T, UnknownObject>
