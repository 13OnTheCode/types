import type { UnknownObject } from '../Base/UnknownObject'
import type { GetOptional } from '../Utils/GetOptional'
import type { GetReadonly } from '../Utils/GetReadonly'
import type { Prettify } from '../Utils/Prettify'
import type { SetOptional } from '../Utils/SetOptional'
import type { SetReadonly } from '../Utils/SetReadonly'

export type MergeObjectOptions = {
  mode?: 'deep' | 'shallow'
}

export type MergeObject<
  Target extends UnknownObject,
  Source extends UnknownObject,
  Options extends MergeObjectOptions = { mode: 'shallow' }
> = (
  [Source | Target] extends [UnknownObject]
    ? Prettify<SetReadonly<SetOptional<{
      [P in keyof Source | keyof Target]: (
        P extends keyof Source & keyof Target
          ? [Options['mode'] extends 'deep' ? Source[P] | Target[P] : unknown] extends [UnknownObject]
            ? MergeObject<NonNullable<Target[P]>, NonNullable<Source[P]>, Options>
            : Source[P]
          : Source[P & keyof Source] | Target[P & keyof Target]
      )
    },
    (keyof Source & keyof GetOptional<Source>) | (keyof Target & keyof GetOptional<Omit<Target, keyof Source>>)>,
    (keyof Source & keyof GetReadonly<Source>) | (keyof Target & keyof GetReadonly<Omit<Target, keyof Source>>)
    >>
    : never
)
