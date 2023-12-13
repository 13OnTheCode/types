import type { EmptyRecord } from '../Base/EmptyRecord'
import type { TypeMatch } from '../Utils/TypeMatch'

export type IsEmptyRecord<T> = TypeMatch<T, EmptyRecord>
