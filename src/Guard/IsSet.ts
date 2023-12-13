import type { UnknownSet } from '../Base/UnknownSet'

import type { isType } from './isType'

export type IsSet<T> = isType<T, UnknownSet>
