import type { UnknownArray } from '../Base/UnknownArray'

export type MergeArrayOptions = {
  mode?: 'replace' | 'spread'
}

export type MergeArray<
  Target extends UnknownArray,
  Source extends UnknownArray,
  Options extends MergeArrayOptions = { mode: 'spread' }
> = (
  [Source | Target] extends UnknownArray
    ? Options['mode'] extends 'replace'
      ? [Target, Source] extends [Readonly<[unknown, ...infer TTail]>, Readonly<[infer SHead, ...infer STail]>]
        ? [SHead, ...MergeArray<TTail, STail, Options>]
        : [...Source, ...Target]
      : [...Target, ...Source]
    : never
)
