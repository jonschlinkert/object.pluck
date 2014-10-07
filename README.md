# object.pluck [![NPM version](https://badge.fury.io/js/object.pluck.svg)](http://badge.fury.io/js/object.pluck)

> Like pluck from underscore / lo-dash, but returns an object composed of specified properties, with values unmodified from those of the original object.

## Usage

```js
var pluck = require('object.pluck');

var obj = {
  a: {locals : {first: 'Brian'}, options : {foo: true}},
  b: {locals : {last: 'Woodward'}, options : {bar: false}}
};

pluck(obj, 'locals');
//=> {a: {first: 'Brian'}, b: {last: 'Woodward'}}

pluck(obj, 'options');
//=> {a: {foo: true}, b: {bar: false}}
```
You can also use property "paths" to get values from nested properties:

```js
var obj = {
  a: {locals : {name: {first: 'Brian'}}},
  b: {locals : {name: {last: 'Woodward'}}}
};
pluck(obj, 'locals.name');

//=> {a: {first: 'Brian'}, b: {last: 'Woodward'}}
```

## Install
#### Install with [npm](npmjs.org):

```bash
npm i object.pluck --save-dev
```

## Run tests

```bash
npm test
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 07, 2014._