const execute = require('./execute');
const config = require('./config');
const METHODS = require('./methods');
/**
 * Returns a Promise which will resolve with all available languages
 * @return {Promise} [description]
 */
module.exports = function languages() {
  // what3words endpoint and key config
  const endpoint = config.getEndpoint();
  const key = config.getApiKey();
  // key to params
  const params = {
    key,
  };
  // build request options
  const options = {
    url: endpoint + METHODS.LANGUAGES,
    qs: params,
  };
  // execute request
  return execute(options);
};
