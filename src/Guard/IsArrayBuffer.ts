import type { IsAnyOrNever } from './IsAnyOrNever'

export type IsArrayBuffer<T> = (
  [T, IsAnyOrNever<T>] extends [ArrayBuffer, false]
    ? true
    : false
)
