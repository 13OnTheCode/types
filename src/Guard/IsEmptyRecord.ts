import type { EmptyRecord } from '../Base/EmptyRecord'

import type { IsType } from './IsType'

export type IsEmptyRecord<T> = IsType<T, EmptyRecord>
