/* global fetch:false */

require('es6-promise').polyfill();
require('isomorphic-fetch');

const buildQueryString = (params) => {
  if (typeof params === 'undefined' || params === null) {
    return '';
  }
  return Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
};
/**
 * [execute description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
const execute = options => new Promise((resolve, reject) => {
  // console.log(options.qs);
  const qs = buildQueryString(options.qs);
  const url = `${options.url}?${qs}`;
  fetch(url).then((response) => {
    if (options.format && (options.format.toLowerCase() !== 'json' || options.format.toLowerCase() !== 'geojson')) {
      return response.text();
    }
    return response.json();
  }).then((data) => {
    resolve(data);
  }).catch((e) => {
    reject({ code: 500, msg: e });
  });
});

module.exports = execute;
