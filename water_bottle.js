
var waterBottle = {
    volume: 0,
    fill: function() {
        this.volume = 100;
    },
    drunkFrom: function() {
        this.volume -= 10;
        this.bringToZero();
    },
    empty: function() {
        this.volume = 0;
    },
    bringToZero: function() {
        if (this.volume < 0) {
            this.volume = 0;
        }
    }
}

module.exports = waterBottle;