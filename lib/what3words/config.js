const ERRORS = require('./errors');

/**
 * Config module
 * @type {Object}
 */
module.exports = {
  getApiKey: () => process.env.W3W_API_KEY,
  getEndpoint: () => {
    let endpoint = 'https://api.what3words.com/v2';
    if (typeof process.env.W3W_API_HOST !== 'undefined') {
      endpoint = process.env.W3W_API_HOST;
      // if (endpoint.length === 0) {
      //   throw new Error(ERRORS.INVALID_ENDPOINT);
      // } else
      if (!/^https?:\/\//i.test(endpoint)) {
        throw new Error(ERRORS.INVALID_ENDPOINT);
      }
    }
    return endpoint;
  },
};
