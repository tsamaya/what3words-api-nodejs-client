const request = require('request');

/**
 * [execute description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
module.exports = function execute(options) {
  const p = new Promise((resolve, reject) => {
    request.get(options, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
  return p;
};
