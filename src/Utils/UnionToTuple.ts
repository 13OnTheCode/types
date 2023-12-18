import type { UnionToIntersection } from './UnionToIntersection'

export type UnionToTuple<U> = (
  UnionToIntersection<U extends unknown ? (x: U) => U : never> extends ((x: never) => infer W)
    ? [...UnionToTuple<Exclude<U, W>>, W]
    : []
)
