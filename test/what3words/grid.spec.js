const what3words = require('../../');
const validate = require('./validateGrid');

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const expect = require('chai').expect;

const ERRORS = what3words.errors;

/* eslint no-console: "off" */

/* eslint no-unused-expressions: "off" */

describe('#grid ', () => {
  describe('input params', () => {
    it('expects to throw with no params', () => {
      const fn = () => {
        what3words.grid();
      };
      expect(fn).to.throw;
      expect(fn).to.throw(ERRORS.UNDEFINED_QUERY);
    });
    it('expects to throw with null', () => {
      const fn = () => {
        what3words.grid(null);
      };
      expect(fn).to.throw;
      expect(fn).to.throw(ERRORS.UNDEFINED_QUERY);
    });
  });

  describe('fails', () => {
    it('expects to fail with no bbox', (done) => {
      what3words
        .grid({})
        .then(
          (data) => {
            // console.log(data);
            expect(data).to.exist;
            expect(data.code).to.exist;
            expect(data.code).to.equal(400);
            expect(data.message).to.exist;
            expect(data.message).to.equal('/grid: missing required parameter "bbox"');
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

    it('expects to fail with invalid bbox', (done) => {
      what3words
        .grid({
          bbox: 'abc',
        })
        .then(
          (data) => {
            // console.log(data);
            expect(data).to.exist;
            expect(data.status).to.exist;
            expect(data.status.status).to.exist;
            expect(data.status.status).to.equal(200);
            expect(data.status.code).to.exist;
            expect(data.status.code).to.equal(108);
            expect(data.status.message).to.exist;
            expect(data.status.message).to.equal('The \'bbox\' parameter is invalid or missing coordinates');
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
    const bbox = '45.192,5.7237,45.188,5.7180';

    xit(`expects grid result [${bbox}] in \`geojson\``, (done) => {
      const params = {
        bbox,
        format: 'geojson',
      };
      what3words
        .grid(params)
        .then(
          (resolved) => {
            // console.log(resolved);
            validate.validateGeoJSONPayload(resolved);
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
