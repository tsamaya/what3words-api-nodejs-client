/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
const expect = require('chai').expect;

/* eslint-disable */
const asJsonPayload = {
  "suggestions": [{
      "country": "us",
      "words": "index.home.from",
      "rank": 1,
      "language": "en",
      "geometry": {
        "lng": -77.387929,
        "lat": 39.442715
      },
      "place": "Frederick, Maryland"
    },
    {
      "country": "gb",
      "words": "index.home.over",
      "rank": 2,
      "language": "en",
      "geometry": {
        "lng": -2.164917,
        "lat": 53.597173
      },
      "place": "Rochdale"
    },
    {
      "country": "us",
      "words": "index.home.part",
      "rank": 3,
      "language": "en",
      "geometry": {
        "lng": -74.584948,
        "lat": 40.569332
      },
      "place": "Finderne, New Jersey"
    }
  ],
  "status": {
    "status": 200,
    "reason": "OK"
  },
  "thanks": "Thanks from all of us at index.home.raft for using a what3words API"
}

const asExactJsonPayload = {
  "suggestions": [{
      "country": "gb",
      "words": "index.home.raft",
      "rank": 1,
      "language": "en",
      "geometry": {
        "lng": -0.203586,
        "lat": 51.521251
      },
      "place": "Bayswater, London"
    },
    {
      "country": "us",
      "words": "indexes.home.raft",
      "rank": 2,
      "language": "en",
      "geometry": {
        "lng": -81.23548,
        "lat": 37.833158
      },
      "place": "Prosperity, West Virginia"
    },
    {
      "country": "us",
      "words": "index.homes.raft",
      "rank": 3,
      "language": "en",
      "geometry": {
        "lng": -79.81275,
        "lat": 36.02206
      },
      "place": "Greensboro, North Carolina"
    }
  ],
  "status": {
    "status": 200,
    "reason": "OK"
  },
  "thanks": "Thanks from all of us at index.home.raft for using a what3words API"
};

const partialBlends = {
  "blends": [{
      "country": "fr",
      "words": "planter.récolter.axer",
      "rank": 1,
      "language": "fr",
      "geometry": {
        "lng": -0.950125,
        "lat": 44.394823
      },
      "place": "Ychoux, Aquitaine"
    },
    {
      "country": "ci",
      "words": "plantant.récolter.axer",
      "rank": 2,
      "language": "fr",
      "geometry": {
        "lng": -4.561536,
        "lat": 7.10135
      },
      "place": "Bocanda, Lacs"
    },
    {
      "country": "ne",
      "words": "planter.récoltante.axer",
      "rank": 3,
      "language": "fr",
      "geometry": {
        "lng": 13.545761,
        "lat": 15.274701
      },
      "place": "Nguigmi, Diffa"
    }
  ],
  "status": {
    "status": 200,
    "reason": "OK"
  },
  "thanks": "Thanks from all of us at index.home.raft for using a what3words API"
}

const exacMatchBlends = {
  "blends": [{
      "country": "fr",
      "words": "planter.récolter.aimer",
      "rank": 1,
      "language": "fr",
      "geometry": {
        "lng": 6.067733,
        "lat": 45.930776
      },
      "place": "Poisy, Rhône-Alpes"
    },
    {
      "country": "cd",
      "words": "planter.récolter.lamer",
      "rank": 2,
      "language": "fr",
      "geometry": {
        "lng": 22.336492,
        "lat": -5.932824
      },
      "place": "Kananga, Kasaï-Occidental"
    },
    {
      "country": "in",
      "words": "planter.récolter.ramer",
      "rank": 3,
      "language": "fr",
      "geometry": {
        "lng": 77.650865,
        "lat": 12.840435
      },
      "place": "Anekal, Karnataka"
    }
  ],
  "status": {
    "status": 200,
    "reason": "OK"
  },
  "thanks": "Thanks from all of us at index.home.raft for using a what3words API"
}
/* eslint-enable */

module.exports = {
  validatePartialJSONPayload: (data) => {
    expect(data).to.deep.equal(asJsonPayload);
  },
  validateExactMatchJSONPayload: (data) => {
    expect(data).to.deep.equal(asExactJsonPayload);
  },
  validatePartialBlendJSONPayload: (data) => {
    expect(data).to.deep.equal(partialBlends);
  },
  validateExactMatchBlendJSONPayload: (data) => {
    expect(data).to.deep.equal(exacMatchBlends);
  },
};
