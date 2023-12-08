export type OmitIndexSignature<T, K extends PropertyKey = PropertyKey> = {
  [P in keyof T as NonNullable<unknown> extends Record<P, unknown> ? Exclude<P, K> : P]: T[P]
}
