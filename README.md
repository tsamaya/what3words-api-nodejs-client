# what3words-api-nodejs-client

[![Build Status](https://travis-ci.org/tsamaya/what3words-api-nodejs-client.svg?branch=master)](https://travis-ci.org/tsamaya/what3words-api-nodejs-client)

[what3words-api-nodejs-client](https://github.com/tsamaya/what3words-api-nodejs-client) is Node.js client library for [what3words API](https://docs.what3words.com/api/v2).

Work In Progress : It exposes a subset of what3words API methods.

### what3words API key

This library allows to use an environment variable (`W3W_API_KEY`) to send requests on what3words API. Otherwise the what3words API keyr is a parameter of each requests.

`$ export W3W_API_KEY=YOUR-API-KEY`

or

```javascript
what3words.forward({
  addr: 'index.home.raft',
  key: 'YOUR-API-KEY'
});
```

### browser ?

what3words already maintains a dedicated client side JavaScript [library](https://github.com/what3words/w3w-javascript-wrapper)


# Get started

1. what3words api
  - create your account : [register](https://what3words.com/register)
  - get you key : [login](https://what3words.com/login)

2. installation
  `$ npm install what3words-api-nodejs-client`

3. configure
  `$ export W3W_API_KEY=YOUR-API-KEY`

4. Enjoy #3wordadresses

# API

## forward(options)

This function wraps what3words API method [forward](https://docs.what3words.com/api/v2/#forward)
It returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) resolved by API payload.

```javascript
const what3words = require('what3words-api-nodejs-client');

what3words.forward({
  addr: 'index.home.raft'
})
.then(
  (data) => {
    console.log(data);
  }
)
.catch((err) => {
  console.error(err);
});
```

## reverse(options)

This function wraps what3words API method [reverse](https://docs.what3words.com/api/v2/#reverse)
It returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) resolved by API payload.

```javascript
const what3words = require('what3words-api-nodejs-client');

what3words.reverse({
  coords: '51.521251,-0.203586'
})
.then(
  (data) => {
    console.log(data);
  }
)
.catch((err) => {
  console.error(err);
});
```

## languages()

This function wraps what3words API method [languages](https://docs.what3words.com/api/v2/#lang)
It returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) resolved by what3words API payload.

```javascript
const what3words = require('what3words-api-nodejs-client');

what3words.languages()
.then(
  (data) => {
    console.log(data);
  }
)
.catch((err) => {
  console.error(err);
});
```

# Contributing

Anyone and everyone is welcome to contribute.

# Issues

Find a bug or want to request a new feature? Please let me know by submitting an issue.

# Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE.md) file.
