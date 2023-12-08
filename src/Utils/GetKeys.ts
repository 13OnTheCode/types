import type { UnknownArray } from '../Base/UnknownArray'
import type { UnknownObject } from '../Base/UnknownObject'

import type { ToNumber } from './ToNumber'

export type GetKeys<T> = (
  T extends ReadonlyMap<infer K, unknown>
    ? K
    : T extends ReadonlySet<infer K>
      ? K
      : T extends UnknownArray
        ? ToNumber<`${{ [K in keyof T]-?: K }[number]}`>
        : T extends UnknownObject
          ? { [K in keyof T]-?: K extends number | string ? `${K}` : never }[keyof T]
          : never
)
