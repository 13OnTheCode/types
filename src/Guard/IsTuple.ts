import type { UnknownTuple } from '../Base/UnknownTuple'

import type { isType } from './isType'

export type IsTuple<T> = isType<T, UnknownTuple>
