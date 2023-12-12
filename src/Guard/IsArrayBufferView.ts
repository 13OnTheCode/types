import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsArrayBufferView<T> = (
  [T, IsAnyOrNever<T>] extends [ArrayBufferView, false]
    ? true
    : false
)
