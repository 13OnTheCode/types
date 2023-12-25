import type { UnknownTuple } from '../Base/UnknownTuple'

import type { IsExtends } from './IsExtends'

export type IsTuple<T> = IsExtends<T, UnknownTuple>
