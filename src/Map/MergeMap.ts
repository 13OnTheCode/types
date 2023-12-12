import type { UnknownMap } from '../Base/UnknownMap'

export type MergeMap<
  Target extends UnknownMap,
  Source extends UnknownMap
> = (
  [Source | Target] extends [ReadonlyMap<infer K, infer V>]
    ? Map<K, V>
    : never
)
