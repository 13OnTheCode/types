export type HasIntersection<T1, T2> = (
  Extract<T1, T2> extends never
    ? false
    : true
)
