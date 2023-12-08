export type ReplaceOptions = {
  all?: boolean;
}

export type Replace<
  Input extends string,
  SearchValue extends string,
  ReplaceValue extends string,
  Options extends ReplaceOptions = { all: false }
> = (
  [Input | ReplaceValue | SearchValue, Options] extends [string, ReplaceOptions]
    ? Input extends `${infer Head}${SearchValue}${infer Tail}`
      ? Options['all'] extends true
        ? `${Head}${ReplaceValue}${Replace<Tail, SearchValue, ReplaceValue, Options>}`
        : `${Head}${ReplaceValue}${Tail}`
      : Input
    : never
)
