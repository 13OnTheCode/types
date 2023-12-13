import type { UnknownSet } from '../Base/UnknownSet'

import type { IsType } from './IsType'

export type IsSet<T> = IsType<T, UnknownSet>
