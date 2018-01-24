/* eslint no-console: "off" */

const what3words = require('../');

what3words.standardblend({
  addr: 'planter.récolte.a',
  lang: 'fr',
})
.then(
  (data) => {
    console.log(data);
  },
)
.catch((err) => {
  console.error(err);
});
