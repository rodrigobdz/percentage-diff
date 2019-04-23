# percentage-diff [![Build Status](https://travis-ci.com/rodrigobdz/percentage-diff.svg?branch=master)](https://travis-ci.com/rodrigobdz/percentage-diff) [![codecov](https://codecov.io/gh/rodrigobdz/percentage-diff/badge.svg?branch=master)](https://codecov.io/gh/rodrigobdz/percentage-diff?branch=master)

> Calculate percentage difference between two numbers

## Install

```sh
$ npm install percentage-diff
```

## Usage

```js
const percentageDiff = require('percentage-diff');

percentageDiff(50, 75);
//=> 50%
percentageDiff(45,35);
//=> -22.22%
```

## API

### percentageDiff(firstNr, secondNr)

#### firstNr

Type: `number`

#### secondNr

Type: `number`

## Credits

* [generator-lnm](https://github.com/rodrigobdz/generator-lnm) - Awesome node module generator

## License

[MIT](license) © [Rodrigo Bermudez Schettino](https://rodrigobdz.github.io)
