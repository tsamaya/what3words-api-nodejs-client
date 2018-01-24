/* eslint no-console: "off" */

const what3words = require('../');

what3words.forward({
  addr: 'index.home.raft',
})
.then(
  (data) => {
    console.log(data);
  },
)
.catch((err) => {
  console.error(err);
});
