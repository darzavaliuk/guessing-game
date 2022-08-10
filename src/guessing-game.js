class GuessingGame {
    constructor() {
        this.gue = null
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
      }
  
      guess() {
        return this.gue = this.min + Math.round((this.max - this.min) / 2);
      }
  
      lower() {
        this.max = this.gue;
      }
  
      greater() {
        this.min = this.gue;
      }
  }

module.exports = GuessingGame;
