# 💡 is

> A tiny type checker

## Installation

```
npm install @itsjonq/is
```

## Usage

```js
import is from '@itsjonq/is';

is.string('Hello');
// true

const fn = () => 'Nope';

is.string(fn);
// false
is.function(fn);
// true
is.object(fn);
// true
is.plainObject(fn);
// false
```

### Supported types

-   `is.array`
-   `is.boolean`
-   `is.defined`
-   `is.function`
-   `is.map`
-   `is.null`
-   `is.number`
-   `is.object`
-   `is.plainObject`
-   `is.regExp`
-   `is.string`
-   `is.symbol`
-   `is.undefined`
-   `is.weakMap`

## Thanks

This library was inspired by [@sindresorhus/is](https://github.com/sindresorhus/is).
