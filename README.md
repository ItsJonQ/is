# 💡 is

[![Build Status](https://travis-ci.org/ItsJonQ/is.svg?branch=master)](https://travis-ci.org/ItsJonQ/is)
[![Coverage Status](https://coveralls.io/repos/github/ItsJonQ/is/badge.svg?branch=master)](https://coveralls.io/github/ItsJonQ/is?branch=master)
[![Bundle size](https://badgen.net/bundlephobia/minzip/@itsjonq/is)](https://bundlephobia.com/result?p=@itsjonq/is)

> A tiny type checker

`is` is a simple sub 400b library for type checking. For a more feature-packed version, check out [@sindresorhus/is](https://github.com/sindresorhus/is).

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Installation](#installation)
-   [Usage](#usage)
    -   [Supported types](#supported-types)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
-   `is.blob`
-   `is.boolean`
-   `is.defined`
-   `is.file`
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
