# @13OnTheCode/Types

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/137921275/258572450-d0a2270e-45ad-4ed4-aed0-b5c0a2eea988.svg" width="100" height="100" align="right" alt="TypeScript" />

[![Version](https://img.shields.io/npm/v/@13onthecode/types?color=1976d2&label=)](https://www.npmjs.com/package/@13onthecode/types)
[![License](https://img.shields.io/npm/l/@13onthecode/types?color=1976d2&label=)](LICENSE.md)

English | [简体中文](README.CN.md)

A collection of TypeScript utility types

## Prerequisites

### TypeScript
- Version >= 5.0.0

## Install

```bash
npm install @13onthecode/types --save-dev
```

## Usage

```typescript
import type { MergeObject } from '@13onthecode/types'

type Foo = {
  foo: 'foo'
  other: {
    foo: 'foo'
  }
}

type Bar = {
  bar: 'bar'
  other: {
    bar: 'bar'
  }
}

type Merged = MergeObject<Foo, Bar>
// => {
//   foo: "foo"
//   bar: "bar"
//   other: {
//       bar: 'bar'
//   }
// }

type DeepMerged = MergeObject<Foo, Bar, { mode: 'deep' }>
// => {
//   foo: "foo"
//   bar: "bar"
//   other: {
//       foo: "foo"
//       bar: "bar"
//   }
// }
```

## API

### Array

- [`GetHead`](src/Array/GetHead.ts)
- [`GetLast`](src/Array/GetLast.ts)
- [`GetTail`](src/Array/GetTail.ts)
- [`Includes`](src/Array/Includes.ts)
- [`MergeArray`](src/Array/MergeArray.ts)

### Base

- [`EmptyArray`](src/Base/EmptyArray.ts)
- [`EmptyMap`](src/Base/EmptyMap.ts)
- [`EmptyObject`](src/Base/EmptyObject.ts)
- [`EmptyRecord`](src/Base/EmptyRecord.ts)
- [`EmptySet`](src/Base/EmptySet.ts)
- [`Primitive`](src/Base/Primitive.ts)
- [`TypedArray`](src/Base/TypedArray.ts)
- [`UnknownArray`](src/Base/UnknownArray.ts)
- [`UnknownAsyncFunction`](src/Base/UnknownAsyncFunction.ts)
- [`UnknownFunction`](src/Base/UnknownFunction.ts)
- [`UnknownMap`](src/Base/UnknownMap.ts)
- [`UnknownObject`](src/Base/UnknownObject.ts)
- [`UnknownRecord`](src/Base/UnknownRecord.ts)
- [`UnknownSet`](src/Base/UnknownSet.ts)
- [`UnknownTuple`](src/Base/UnknownTuple.ts)

### Guard

- [`IsAny`](src/Guard/IsAny.ts)
- [`IsArray`](src/Guard/IsArray.ts)
- [`IsArrayBuffer`](src/Guard/IsArrayBuffer.ts)
- [`IsArrayBufferView`](src/Guard/IsArrayBufferView.ts)
- [`IsAsyncFunction`](src/Guard/IsAsyncFunction.ts)
- [`IsBoolean`](src/Guard/IsBoolean.ts)
- [`IsEmptyArray`](src/Guard/IsEmptyArray.ts)
- [`IsEmptyMap`](src/Guard/IsEmptyMap.ts)
- [`IsEmptyObject`](src/Guard/IsEmptyObject.ts)
- [`IsEmptyRecord`](src/Guard/IsEmptyRecord.ts)
- [`IsEmptySet`](src/Guard/IsEmptySet.ts)
- [`IsEqual`](src/Guard/IsEqual.ts)
- [`IsFunction`](src/Guard/IsFunction.ts)
- [`IsMap`](src/Guard/IsMap.ts)
- [`IsNever`](src/Guard/IsNever.ts)
- [`IsNonNullable`](src/Guard/IsNonNullable.ts)
- [`IsNull`](src/Guard/IsNull.ts)
- [`IsNullable`](src/Guard/IsNullable.ts)
- [`IsObject`](src/Guard/IsObject.ts)
- [`IsPrimitive`](src/Guard/IsPrimitive.ts)
- [`IsSet`](src/Guard/IsSet.ts)
- [`IsTuple`](src/Guard/IsTuple.ts)
- [`isType`](src/Guard/isType.ts)
- [`IsUnion`](src/Guard/IsUnion.ts)
- [`IsUnknown`](src/Guard/IsUnknown.ts)

### Map

- [`MergeMap`](src/Map/MergeMap.ts)

### Object

- [`MergeObject`](src/Object/MergeObject.ts)

### Set

- [`MergeSet`](src/Set/MergeSet.ts)

### String

- [`Replace`](src/String/Replace.ts)
- [`Split`](src/String/Split.ts)

### Utils

- [`Entries`](src/Utils/Entries.ts)
- [`GetKeys`](src/Utils/GetKeys.ts)
- [`GetOptional`](src/Utils/GetOptional.ts)
- [`GetReadonly`](src/Utils/GetReadonly.ts)
- [`GetRequired`](src/Utils/GetRequired.ts)
- [`GetValues`](src/Utils/GetValues.ts)
- [`OmitIndexSignature`](src/Utils/OmitIndexSignature.ts)
- [`PickIndexSignature`](src/Utils/PickIndexSignature.ts)
- [`Prettify`](src/Utils/Prettify.ts)
- [`SetOptional`](src/Utils/SetOptional.ts)
- [`SetReadonly`](src/Utils/SetReadonly.ts)
- [`SetRequired`](src/Utils/SetRequired.ts)
- [`ToArray`](src/Utils/ToArray.ts)
- [`ToNumber`](src/Utils/ToNumber.ts)
- [`ToPrimitive`](src/Utils/ToPrimitive.ts)
- [`ToUnion`](src/Utils/ToUnion.ts)
- [`Writable`](src/Utils/Writable.ts)

## Check Also

- [`@13OnTheCode/Typescript-Config`](https://github.com/13OnTheCode/typescript-config)
- [`@13OnTheCode/Utils`](https://github.com/13OnTheCode/utils)

## License

[MIT](LICENSE.md) License &copy; 2023-PRESENT [13OnTheCode](https://github.com/13OnTheCode)
