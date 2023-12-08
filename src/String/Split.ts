export type Split<
  Source extends string,
  Delimiter extends string = ''
> = (
  [Delimiter | Source] extends [string]
    ? Source extends `${infer Head}${Delimiter}${infer Tail}`
      ? [Head, ...Split<Tail, Delimiter>]
      : Source extends Delimiter
        ? []
        : [Source]
    : never
)
