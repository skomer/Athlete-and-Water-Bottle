var assert = require('assert');
var bottle = require('../water_bottle.js');

describe('Water bottle', function() {
    it('should be empty at the start', function() {
        assert.equal(0, bottle.volume);
    });
});

describe('Water bottle', function() {
    it('should have volume 100 when filled', function() {
        bottle.fill();
        assert.equal(100, bottle.volume);
    });
});

describe('Water bottle', function() {
    it('volume goes down by 10 when drunk from', function() {
        bottle.fill();
        bottle.drunkFrom();
        assert.equal(90, bottle.volume);
    });
});

describe('Water bottle', function() {
    it('volume is 0 when bottle is emptied', function() {
        bottle.fill();
        bottle.empty();
        assert.equal(0, bottle.volume);
    });
});

describe('Water bottle', function() {
    it('volume cannot go below 0', function() {
        bottle.empty();
        bottle.drunkFrom;
        bottle.drunkFrom;
        bottle.drunkFrom;
        bottle.drunkFrom;
        assert.equal(0, bottle.volume);
    });
});










