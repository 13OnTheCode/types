import type { Prettify } from './Prettify'

export type OmitIndexSignature<T, K extends PropertyKey = PropertyKey> = Prettify<{
  [P in keyof T as NonNullable<unknown> extends Record<P, unknown> ? Exclude<P, K> : P]: T[P]
}>
