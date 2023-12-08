import type { GetReadonly } from './GetReadonly'
import type { Prettify } from './Prettify'

export type SetReadonly<T, K extends keyof T> = (
  T extends unknown
    ? Prettify<Readonly<T> & { -readonly [P in keyof T as Exclude<P, K> & Exclude<P, keyof GetReadonly<T>>]: T[P] }>
    : never
)
