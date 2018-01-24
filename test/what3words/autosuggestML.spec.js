const what3words = require('../../');
const validateAS = require('./validateAS');

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const expect = require('chai').expect;

const ERRORS = what3words.errors;

/* eslint no-console: "off" */

/* eslint no-unused-expressions: "off" */

describe('#autosuggestML ', () => {
  describe('input params', () => {
    it('expects to throw with no params', () => {
      const fn = () => {
        what3words.autosuggestML();
      };
      expect(fn).to.throw;
      expect(fn).to.throw(ERRORS.UNDEFINED_QUERY);
    });
    it('expects to throw with null', () => {
      const fn = () => {
        what3words.autosuggestML(null);
      };
      expect(fn).to.throw;
      expect(fn).to.throw(ERRORS.UNDEFINED_QUERY);
    });
  });

  describe('fails', () => {
    it('expects to fail with no addr', (done) => {
      what3words
        .autosuggestML({})
        .then(
          (data) => {
            // console.log(data);
            expect(data).to.exist;
            expect(data.code).to.exist;
            expect(data.code).to.equal(400);
            expect(data.message).to.exist;
            expect(data.message).to.equal('/autosuggest-ml: missing required parameter "addr"');
            done();
          },
          (rejected) => {
            console.log(rejected);
            done(rejected);
          })
        .catch((err) => {
          done(err);
        });
    });

    // it('expects to fail with no lang', (done) => {
    //   what3words
    //     .autosuggestML({
    //       addr: 'index.home.r',
    //     })
    //     .then(
    //       (data) => {
    //         console.log(data);
    //         expect(data).to.exist;
    //         expect(data.code).to.exist;
    //         expect(data.code).to.equal(400);
    //         expect(data.message).to.exist;
    //         expect(data.message).to.equal('/autosuggest-ml: missing required parameter "lang"');
    //         done();
    //       },
    //       (rejected) => {
    //         console.log(rejected);
    //         done(rejected);
    //       })
    //     .catch((err) => {
    //       done(err);
    //     });
    // });

    it('expects to fail with invalid addr', (done) => {
      what3words
        .autosuggestML({
          addr: 'abc',
          lang: 'en',
        })
        .then(
          (data) => {
            // console.log(data);
            expect(data).to.exist;
            expect(data.status).to.exist;
            expect(data.status.status).to.exist;
            expect(data.status.status).to.equal(200);
            expect(data.status.code).to.exist;
            expect(data.status.code).to.equal(102);
            expect(data.status.message).to.exist;
            expect(data.status.message).to.equal('The \'addr\' parameter is invalid or missing a partial or complete 3 word address');
            done();
          },
          (rejected) => {
            console.log(rejected);
            done(rejected);
          })
        .catch((err) => {
          done(err);
        });
    });
  });

  describe('success', () => {
    const exact = 'index.home.raft';
    const partial = 'index.home.r';

    it(`partial [${partial}]`, (done) => {
      const params = {
        addr: partial,
        lang: 'en',
      };
      what3words
        .autosuggestML(params)
        .then(
          (resolved) => {
            // console.log(resolved);
            validateAS.validatePartialJSONPayload(resolved);
            done();
          },
          (rejected) => {
            console.log('rejected', rejected);
            done(rejected);
          })
        .catch((err) => {
          console.log('catch', err);
          done(err);
        });
    });

    it(`exact [${exact}]`, (done) => {
      const params = {
        addr: exact,
        lang: 'en',
      };
      what3words
        .autosuggestML(params)
        .then(
          (resolved) => {
            // console.log(resolved);
            validateAS.validateExactMatchJSONPayload(resolved);
            done();
          },
          (rejected) => {
            console.log('rejected', rejected);
            done(rejected);
          })
        .catch((err) => {
          console.log('catch', err);
          done(err);
        });
    });
  });
});
