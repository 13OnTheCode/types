export type Writable<T> = (
  T extends ReadonlyMap<infer Key, infer Value>
    ? Map<Key, Value>
    : T extends ReadonlySet<infer Item>
      ? Set<Item>
      : T extends Readonly<[...infer U]>
        ? [...U]
        : { -readonly [P in keyof T]: T[P] }
)
