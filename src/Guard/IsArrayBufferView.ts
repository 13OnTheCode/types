import type { isType } from './isType'

export type IsArrayBufferView<T> = isType<T, ArrayBufferView>
