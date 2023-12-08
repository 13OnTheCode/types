export type PickIndexSignature<T, K extends PropertyKey = PropertyKey> = {
  [P in keyof T as NonNullable<unknown> extends Record<P, unknown> ? Extract<P, K> : never]: T[P]
}
