import type { Prettify } from './Prettify'

export type SetOptional<T, K extends keyof T> = (
  T extends unknown
    ? Prettify<Partial<T> & Pick<T, Exclude<keyof T, K>>>
    : never
)
