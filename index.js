const languages = require('./lib/what3words/languages');
const reverse = require('./lib/what3words/reverse');
const forward = require('./lib/what3words/forward');
const errors = require('./lib/what3words/forward');

/**
 * what3words API wrapper
 * @type {Object}
 */
module.exports = {
  languages,
  reverse,
  forward,
  errors,
};
