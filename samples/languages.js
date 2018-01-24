/* eslint no-console: "off" */

const what3words = require('../');

what3words.languages()
.then(
  (data) => {
    console.log(data);
  },
)
.catch((err) => {
  console.error(err);
});
