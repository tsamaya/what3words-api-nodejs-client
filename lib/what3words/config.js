const ERRORS = require('./errors');

/**
 * Config module
 * @type {Object}
 */
module.exports = {
  getApiKey: () => process.env.W3W_API_KEY,
  getEndpoint: () => {
    let endpoint = 'https://api.what3words.com/v2';
    if (process.env.W3W_API_HOST) {
      endpoint = process.env.W3W_API_HOST;
      if (typeof endpoint === 'string' && endpoint.length === 0) {
        throw new Error(ERRORS.INVALID_ENDPOINT);
      }
    }
    return endpoint;
  },
};
