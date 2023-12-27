import type { IsNumber } from './IsNumber'
import type { IsTuple } from './IsTuple'

export type IsVariadicTuple<T> = (
  [IsTuple<T>, IsNumber<T['length' & keyof T]>] extends [true, true]
    ? true
    : false
)
