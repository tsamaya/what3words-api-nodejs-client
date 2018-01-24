/* eslint no-console: "off" */

const what3words = require('../');

what3words.reverse({
  coords: '51.521251,-0.203586',
})
.then(
  (data) => {
    console.log(data);
  },
)
.catch((err) => {
  console.error(err);
});
