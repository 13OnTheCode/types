import type { Prettify } from './Prettify'

export type SetRequired<T, K extends keyof T> = (
  T extends unknown
    ? Prettify<T & Required<Pick<T, Extract<keyof T, K>>>>
    : never
)
