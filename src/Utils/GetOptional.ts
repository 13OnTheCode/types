import type { Prettify } from './Prettify'

export type GetOptional<T> = (
  T extends unknown
    ? Prettify<{ [P in keyof T as T extends Record<P, T[P]> ? never : P]: T[P] }>
    : never
)
