(function(exports) {
  "use strict";

  function Cell(isAlive) {
    this.alive = isAlive;
  }
  exports.Cell = Cell;

  Cell.prototype = {
    alive: function() { return this.alive },

    age: function(numberOfLiveNeighbours) {
      if(numberOfLiveNeighbours < 0 || numberOfLiveNeighbours > 8) {
        throw new Error('Invalid neighbor count');
      }

      if ( this.alive ) {
        this.alive = numberOfLiveNeighbours === 2 || numberOfLiveNeighbours === 3;
      } else {
        this.alive = numberOfLiveNeighbours === 3;
      }
    }
  };

})(this);
