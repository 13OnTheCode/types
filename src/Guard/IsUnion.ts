export type IsUnion<T> = (
  (
    [T, never] extends [infer U, never]
      ? U extends unknown
        ? [T, keyof U] extends [U | boolean, keyof T]
          ? false
          : true
        : never
      : never
  ) extends false
    ? false
    : true
)
