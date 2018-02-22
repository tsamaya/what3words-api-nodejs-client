require('es6-promise').polyfill();
require('isomorphic-fetch');

const buildQueryString = (params) => {
  if (typeof params === 'undefined' || params === null) {
    return '';
  }
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
};

const parseJSON = response => response.json();

/**
 * [execute description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
const execute = options => new Promise((resolve, reject) => {
  // console.log(options.qs);
  const qs = buildQueryString(options.qs);
  const url = `${options.url}?${qs}`;
  global
    .fetch(url)
    .then(parseJSON)
    .then((data) => {
      resolve(data);
    })
    .catch((e) => {
      reject({ code: 500, msg: e });
    });
});

module.exports = execute;
