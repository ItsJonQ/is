# 💡 is

[![Build Status](https://travis-ci.org/ItsJonQ/is.svg?branch=master)](https://travis-ci.org/ItsJonQ/is)
[![Coverage Status](https://coveralls.io/repos/github/ItsJonQ/is/badge.svg?branch=master)](https://coveralls.io/github/ItsJonQ/is?branch=master)
[![Bundle size](https://badgen.net/bundlephobia/minzip/@itsjonq/is)](https://bundlephobia.com/result?p=@itsjonq/is)

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
