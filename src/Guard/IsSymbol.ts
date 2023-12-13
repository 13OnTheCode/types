import type { IsEqual } from './IsEqual'

export type IsSymbol<T> = IsEqual<T, symbol>
