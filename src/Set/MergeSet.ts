import type { UnknownSet } from '../Base/UnknownSet'

export type MergeSet<
  Target extends UnknownSet,
  Source extends UnknownSet
> = (
  [Source | Target] extends [ReadonlySet<infer Item>]
    ? Set<Item>
    : never
)
