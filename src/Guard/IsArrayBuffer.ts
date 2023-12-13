import type { TypeMatch } from '../Utils/TypeMatch'

export type IsArrayBuffer<T> = TypeMatch<T, ArrayBuffer>
