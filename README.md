# [useware][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Accept Arguments object or multiple arguments that can be any value, including deeply nested arrays. Flatten the arguments/values then filter them to be only functions.  
Useful for `.use` methods.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i useware --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
const useware = require('useware')

function fixtureArguments () {
  return useware(arguments)
}

function fixtureMultiple () {
  return useware.apply(this, arguments)
}

function fn1 () {}
function fn2 () {}
function fn3 () {}

fixtureArguments(fn1, [1, [2, 3, fn2]], {foo: 'bar'}, [fn3, [4, 5]])
//=> [fn1, fn2, fn3]

fixtureMultiple([1, fn1, [2, [fn3, [4, 5]], fn2]], fn1, [6, [fn3, 7, 'a']])
//=> [fn1, fn3, fn2, fn1, fn3]
```
> **Note** that functions **are not** uniqueified


## Related
- [benz](https://github.com/tunnckocore/benz): Compose your control flow with absolute elegance. Support async/await, callbacks, thunks, generators, promises, observables, child… [more](https://github.com/tunnckocore/benz)
- [composer](https://github.com/jonschlinkert/composer): Boilerplate for creating a node.js application based on Template, vinyl and orchestrator. This consists of… [more](https://github.com/jonschlinkert/composer)
- [generate](https://github.com/generate/generate): Project generator, for node.js.
- [vez](https://github.com/tunnckocore/vez): Middleware composition at new level. Ultimate alternative to `ware`, `plugins`, `koa-compose` and `composition` packages. Allows… [more](https://github.com/tunnckocore/vez)
- [verb](https://github.com/assemble/verb): Documentation generator for GitHub projects. Extremely powerful, easy to use, can generate anything from API… [more](https://github.com/assemble/verb)
- [useware-context](https://www.npmjs.com/package/useware-context): Much like `useware` but with the ability to bind given context to each function.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/useware/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/useware
[npmjs-img]: https://img.shields.io/npm/v/useware.svg?label=useware

[license-url]: https://github.com/tunnckoCore/useware/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/useware
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/useware.svg

[travis-url]: https://travis-ci.org/tunnckoCore/useware
[travis-img]: https://img.shields.io/travis/tunnckoCore/useware.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/useware
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/useware.svg

[david-url]: https://david-dm.org/tunnckoCore/useware
[david-img]: https://img.shields.io/david/tunnckoCore/useware.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg