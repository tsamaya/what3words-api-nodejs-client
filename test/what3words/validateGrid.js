/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
const expect = require('chai').expect;

/* eslint no-unused-expressions: "off" */

module.exports = {
  validateGeoJSONPayload: (data) => {
    expect(data).to.exist;
    expect(data.type).to.exist;
    expect(data.type).to.equal('MultiLineString');
    expect(data.coordinates).to.exist;
    expect(data.coordinates.length).to.be.at.least(1);
  },
};
