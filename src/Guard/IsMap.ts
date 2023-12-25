import type { UnknownMap } from '../Base/UnknownMap'

import type { IsExtends } from './IsExtends'

export type IsMap<T> = IsExtends<T, UnknownMap>
