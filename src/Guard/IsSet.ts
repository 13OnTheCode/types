import type { UnknownSet } from '../Base/UnknownSet'

import type { IsExtends } from './IsExtends'

export type IsSet<T> = IsExtends<T, UnknownSet>
