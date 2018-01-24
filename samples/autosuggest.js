/* eslint no-console: "off" */

const what3words = require('../');

what3words.autosuggest({
  addr: 'index.home.ra',
  lang: 'en',
})
.then(
  (data) => {
    console.log(data);
  },
)
.catch((err) => {
  console.error(err);
});
