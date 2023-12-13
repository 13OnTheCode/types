import type { UnknownArray } from '../Base/UnknownArray'

import type { IsType } from './IsType'

export type IsArray<T> = IsType<T, UnknownArray>
