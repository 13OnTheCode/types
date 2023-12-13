import type { UnknownMap } from '../Base/UnknownMap'

import type { IsType } from './IsType'

export type IsMap<T> = IsType<T, UnknownMap>
