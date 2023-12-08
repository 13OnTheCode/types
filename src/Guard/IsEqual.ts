export type IsEqual<T1, T2> = (
  (<G>() => G extends T1 ? 1 : 2) extends (<G>() => G extends T2 ? 1 : 2)
    ? true
    : false
)
