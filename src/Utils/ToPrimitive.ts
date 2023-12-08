export type ToPrimitive<T> = (
  T extends object
    ? { [P in keyof T]: ToPrimitive<T[P]> }
    : T extends { valueOf: () => infer P }
      ? P
      : T
)
