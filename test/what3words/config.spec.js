const what3words = require('../../');
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const expect = require('chai').expect;
const config = require('../../lib/what3words/config.js');

const ERRORS = what3words.errors;

/* eslint no-console: "off" */

/* eslint no-unused-expressions: "off" */

describe('#config ', () => {
  const apiKey = process.env.W3W_API_KEY;
  it('getApiKey() equal env W3W_API_KEY', () => {
    const key = config.getApiKey();
    expect(apiKey).to.exist;
    expect(key).to.exist;
    expect(apiKey).to.equal(key);
  });
  it('endpoint to equal https://api.what3words.com/v2', () => {
    const ENDPOINT = 'https://api.what3words.com/v2';
    expect(config.getEndpoint()).to.equal(ENDPOINT);
  });
  describe('endpoint env empty', () => {
    before(() => {
      process.env.W3W_API_HOST = '';
    });
    it('throws an error', () => {
      const fn = () => {
        config.getEndpoint();
      };
      expect(fn).to.throw;
      expect(fn).to.throw(ERRORS.INVALID_ENDPOINT);
    });
    after(() => {
      delete process.env.W3W_API_HOST;
    });
  });
  describe('endpoint env invalid', () => {
    before(() => {
      process.env.W3W_API_HOST = '123';
    });
    it('endpoint numeric value', () => {
      const fn = () => {
        config.getEndpoint();
      };
      expect(fn).to.throw;
      expect(fn).to.throw(ERRORS.INVALID_ENDPOINT);
    });
    after(() => {
      delete process.env.W3W_API_HOST;
    });
  });
  describe('endpoint env valid', () => {
    const ENDPOINT = 'https://api.new.what3words.com/v2';
    before(() => {
      process.env.W3W_API_HOST = ENDPOINT;
    });
    it('endpoint is valid', () => {
      expect(config.getEndpoint()).to.equal(ENDPOINT);
    });
    after(() => {
      delete process.env.W3W_API_HOST;
    });
  });
});
