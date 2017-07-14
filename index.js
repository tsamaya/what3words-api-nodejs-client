const languages = require('./lib/what3words/languages');
const reverse = require('./lib/what3words/reverse');
const forward = require('./lib/what3words/forward');
const autosuggest = require('./lib/what3words/autosuggest');
const standardblend = require('./lib/what3words/standardblend');
const grid = require('./lib/what3words/grid');
const errors = require('./lib/what3words/errors');

/**
 * what3words API wrapper
 * @type {Object}
 */
module.exports = {
  languages,
  reverse,
  forward,
  autosuggest,
  standardblend,
  grid,
  errors,
};
