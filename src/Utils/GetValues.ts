import type { UnknownArray } from '../Base/UnknownArray'
import type { UnknownObject } from '../Base/UnknownObject'

export type GetValues<T> = (
  T extends ReadonlyMap<unknown, infer V>
    ? V
    : T extends ReadonlySet<infer V>
      ? V
      : T extends UnknownArray
        ? { [K in keyof T]-?: T[K] }[number]
        : T extends UnknownObject
          ? { [K in keyof T]-?: K extends symbol ? never : T[K] }[keyof T]
          : never
)
