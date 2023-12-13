import type { UnknownObject } from '../Base/UnknownObject'

import type { IsType } from './IsType'

export type IsObject<T> = IsType<T, UnknownObject>
