import type { EmptyRecord } from '../Base/EmptyRecord'

import type { isType } from './isType'

export type IsEmptyRecord<T> = isType<T, EmptyRecord>
