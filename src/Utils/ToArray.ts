import type { UnknownArray } from '../Base/UnknownArray'

export type ToArrayOptions = {
  convertIterable?: boolean
}

export type ToArray<
  T,
  Options extends ToArrayOptions = { convertIterable: false }
> = (
  T extends UnknownArray
    ? T
    : [Options['convertIterable'] extends true ? T : unknown] extends [Iterable<infer R>]
      ? R[]
      : [T]

)
