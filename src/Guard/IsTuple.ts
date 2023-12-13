import type { UnknownTuple } from '../Base/UnknownTuple'

import type { IsType } from './IsType'

export type IsTuple<T> = IsType<T, UnknownTuple>
