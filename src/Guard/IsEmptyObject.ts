import type { EmptyObject } from '../Base/EmptyObject'

import type { IsType } from './IsType'

export type IsEmptyObject<T> = IsType<T, EmptyObject>
