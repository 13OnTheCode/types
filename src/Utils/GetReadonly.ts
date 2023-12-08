import type { IsEqual } from '../Guard/IsEqual'

import type { Prettify } from './Prettify'

export type GetReadonly<T> = (
  T extends unknown
    ? Prettify<{ [P in keyof T as IsEqual<{ [Q in P]: T[P] }, { readonly [Q in P]: T[P] }> extends true ? P : never]: T[P] }>
    : never
)
