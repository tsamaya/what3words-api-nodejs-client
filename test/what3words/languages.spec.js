const what3words = require('../../');
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const expect = require('chai').expect;

/* eslint no-console: "off" */

/* eslint no-unused-expressions: "off" */

describe('#languages', () => {
  it('expects return languages', (done) => {
    what3words.languages().then((resolved) => {
      // console.log(resolved);
      const data = JSON.parse(resolved);
      expect(data.languages).to.exist;
      expect(data.languages.length).to.be.at.least(1);
      expect(data.languages[0].code).to.exist;
      expect(data.languages[0].name).to.exist;
      expect(data.languages[0].native_name).to.exist;
      done();
    }, (rejected) => {
      console.log(rejected);
      done(rejected);
    }).catch((err) => {
      console.log(err);
      done(err);
    });
  });
});
