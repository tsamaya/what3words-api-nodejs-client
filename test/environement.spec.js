/* eslint no-unused-expressions: "off" */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const expect = require('chai').expect;

/* eslint no-console: "off" */

process.on('unhandledRejection', (reason) => {
  console.log(reason);
});

describe('#environement', () => {
  const apiKey = process.env.W3W_API_KEY;

  it('should find W3W_API_KEY', () => {
    expect(apiKey).to.exist;
  });
  it('should find non-empty W3W_API_KEY', () => {
    expect(apiKey).to.not.be.empty;
  });
});
