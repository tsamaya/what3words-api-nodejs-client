const _ = require('lodash');
const execute = require('./execute');
const ERRORS = require('./errors');
const METHODS = require('./methods');
const config = require('./config');
/**
 *
 * @param  {Object} params [description]
 * @return {Promise}        [description]
 */
module.exports = function autosuggest(params) {
  if (typeof params === 'undefined' || params === null) {
    throw new Error(ERRORS.UNDEFINED_QUERY);
  }
  // what3words endpoint and key config
  const endpoint = config.getEndpoint();
  const key = config.getApiKey();
  // adds key to params
  const finalParams = _.extend({
    key,
  }, params);
  // build request options
  const options = {
    url: endpoint + METHODS.AUTOSUGGEST,
    qs: finalParams,
  };
  // execute request
  return execute(options);
};
