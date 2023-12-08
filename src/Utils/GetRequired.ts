import type { Prettify } from './Prettify'

export type GetRequired<T> = (
  T extends unknown
    ? Prettify<{ [P in keyof T as T extends Record<P, T[P]> ? P : never]: T[P] }>
    : never
)
