const what3words = require('../../');
const validateAS = require('./validateAS');

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const expect = require('chai').expect;

const ERRORS = what3words.errors;

/* eslint no-console: "off" */

/* eslint no-unused-expressions: "off" */

describe('#standardblend ', () => {
  describe('input params', () => {
    it('expects to throw with no params', () => {
      const fn = () => {
        what3words.standardblend();
      };
      expect(fn).to.throw;
      expect(fn).to.throw(ERRORS.UNDEFINED_QUERY);
    });
    it('expects to throw with null', () => {
      const fn = () => {
        what3words.standardblend(null);
      };
      expect(fn).to.throw;
      expect(fn).to.throw(ERRORS.UNDEFINED_QUERY);
    });
  });

  describe('fails', () => {
    it('expects to fail with no addr', (done) => {
      what3words
        .standardblend({})
        .then(
          (resolved) => {
            // console.log(resolved);
            const data = JSON.parse(resolved);
            expect(data).to.exist;
            expect(data.code).to.exist;
            expect(data.code).to.equal(400);
            expect(data.message).to.exist;
            expect(data.message).to.equal('/standardblend: missing required parameter "addr"');
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

    it('expects to fail with no lang', (done) => {
      what3words
        .standardblend({
          addr: 'abc',
        })
        .then(
          (resolved) => {
            // console.log(resolved);
            const data = JSON.parse(resolved);
            expect(data).to.exist;
            expect(data.code).to.exist;
            expect(data.code).to.equal(400);
            expect(data.message).to.exist;
            expect(data.message).to.equal('/standardblend: missing required parameter "lang"');
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

    xit('expects to fail with invalid addr', (done) => {
      what3words
        .standardblend({
          addr: 'abc',
          lang: 'en',
        })
        .then(
          (resolved) => {
            // console.log(resolved);
            const data = JSON.parse(resolved);
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
    const exact = 'planter.récolte.amer';
    const partial = 'planter.récolte.a';

    it(`partial [${partial}]`, (done) => {
      const params = {
        addr: partial,
        lang: 'fr',
      };
      what3words
        .standardblend(params)
        .then(
          (resolved) => {
            // console.log(resolved);
            validateAS.validatePartialBlendJSONPayload(JSON.parse(resolved));
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
        lang: 'fr',
      };
      what3words
        .standardblend(params)
        .then(
          (resolved) => {
            // console.log(resolved);
            validateAS.validateExactMatchBlendJSONPayload(JSON.parse(resolved));
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
