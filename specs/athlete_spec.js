var assert = require('assert');
var athlete = require('../athlete.js');
var bottle = require('../water_bottle.js');

describe('Athlete', function() {
    it('hydration should start at 100', function() {
        assert.equal(100, athlete.hydration);
    });
});

describe('Athlete', function() {
    it('distanceCovered should start at 0', function() {
        assert.equal(0, athlete.distanceCovered);
    });
});

describe('Athlete', function() {
    it('athlete can run, decreasing hydration', function() {
        athlete.run();
        assert.equal(90, athlete.hydration);
    });
});

describe('Athlete', function() {
    it('athlete can run, increasing distanceCovered', function() {
        athlete.run();
        assert.equal(20, athlete.distanceCovered);
    });
});

describe('Athlete', function() {
    it('athlete can drink, increasing hydration', function() {
        athlete.run();
        athlete.drink();
        athlete.drink();
        assert.equal(90, athlete.hydration);
    });
});

describe('Athlete', function() {
    it('athlete cannot run when dehydrated', function() {
        athlete.run();
        athlete.run();
        athlete.run();
        athlete.run();
        athlete.run();
        athlete.run();
        athlete.run();
        athlete.run();
        athlete.run();
        athlete.run();
        athlete.run();
        athlete.run();
        athlete.run();
        athlete.run();
        var distance1 = athlete.distanceCovered;
        athlete.run();
        athlete.run();
        var distance2 = athlete.distanceCovered;
        assert.equal(distance1, distance2);
    });
});















