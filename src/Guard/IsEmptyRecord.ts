import type { EmptyRecord } from '../Base/EmptyRecord'

import type { IsExtends } from './IsExtends'

export type IsEmptyRecord<T> = IsExtends<T, EmptyRecord>
