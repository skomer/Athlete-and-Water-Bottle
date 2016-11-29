var bottle = require('./water_bottle.js');

var athlete = {
    hydration: 100,
    distanceCovered: 0,
    run: function() {
        if (this.hydration === 0) {
            return;
        } else {
            this.hydration -= 10;
            this.distanceCovered += 10;
            this.bringToZero();
        }
    },
    bringToZero: function() {
        if (this.hydration < 0) {
            this.hydration = 0;
        }
    },
    drink: function() {
        this.hydration += 10;
        bottle.drunkFrom();
    }

}


module.exports = athlete;