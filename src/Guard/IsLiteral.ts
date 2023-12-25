import type { IsBigintLiteral } from './IsBigintLiteral'
import type { IsBooleanLiteral } from './IsBooleanLiteral'
import type { IsNull } from './IsNull'
import type { IsNumberLiteral } from './IsNumberLiteral'
import type { IsStringLiteral } from './IsStringLiteral'
import type { IsSymbolLiteral } from './IsSymbolLiteral'
import type { IsUndefined } from './IsUndefined'

export type IsLiteral<T> = (
  [
    IsBigintLiteral<T> |
    IsBooleanLiteral<T> |
    IsNull<T> |
    IsNumberLiteral<T> |
    IsStringLiteral<T> |
    IsSymbolLiteral<T> |
    IsUndefined<T>
  ] extends [false]
    ? false
    : true
)
