const what3words = require('../../');
const validate = require('./validate');

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const expect = require('chai').expect;

const ERRORS = what3words.errors;

/* eslint no-console: "off" */

/* eslint no-unused-expressions: "off" */

describe('#reverse ', () => {
  describe('input params', () => {
    it('expects to throw with no params', () => {
      const fn = () => {
        what3words.reverse();
      };
      expect(fn).to.throw;
      expect(fn).to.throw(ERRORS.UNDEFINED_QUERY);
    });
    it('expects to throw with null', () => {
      const fn = () => {
        what3words.reverse(null);
      };
      expect(fn).to.throw;
      expect(fn).to.throw(ERRORS.UNDEFINED_QUERY);
    });
  });

  describe('fails', () => {
    it('expects to fail with no coords', (done) => {
      what3words
        .reverse({})
        .then(
          (resolved) => {
            // console.log(resolved);
            const data = JSON.parse(resolved);
            expect(data).to.exist;
            expect(data.code).to.exist;
            expect(data.code).to.equal(400);
            expect(data.message).to.exist;
            expect(data.message).to.equal('/reverse: missing required parameter "coords"');
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

    it('expects to fail with invalid coords', (done) => {
      what3words
        .reverse({
          coords: 'abc',
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
            expect(data.status.code).to.equal(104);
            expect(data.status.message).to.exist;
            expect(data.status.message).to.equal('The \'coords\' parameter is invalid or missing coordinates');
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
    const coords = '51.521251,-0.203586';

    it(`should reverse [${coords}] in \`json\``, (done) => {
      const params = {
        coords,
        format: 'json',
      };
      what3words
        .reverse(params)
        .then(
          (resolved) => {
            // console.log(resolved);
            validate.validateJSONPayload(JSON.parse(resolved));
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

    it(`should reverse [${coords}] in \`geojson\``, (done) => {
      const params = {
        coords,
        format: 'geojson',
      };
      what3words
        .reverse(params)
        .then(
          (resolved) => {
            // console.log(resolved);
            validate.validateGeoJSONPayload(JSON.parse(resolved));
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
    // end of geojson
  });
});
