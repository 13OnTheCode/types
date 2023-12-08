import type { UnknownArray } from '../Base/UnknownArray'
import type { UnknownMap } from '../Base/UnknownMap'
import type { UnknownObject } from '../Base/UnknownObject'
import type { UnknownSet } from '../Base/UnknownSet'

import type { GetKeys } from './GetKeys'
import type { GetValues } from './GetValues'

export type Entries<T> = (
  T extends UnknownArray | UnknownMap | UnknownObject | UnknownSet
    ? [GetKeys<T>, GetValues<T>][]
    : never
)
