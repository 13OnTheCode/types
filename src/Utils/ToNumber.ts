export type ToNumber<T> = (
  T extends number
    ? T
    : T extends `${infer N extends number}`
      ? N
      : never
)
