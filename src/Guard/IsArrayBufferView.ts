import type { TypeMatch } from '../Utils/TypeMatch'

export type IsArrayBufferView<T> = TypeMatch<T, ArrayBufferView>
