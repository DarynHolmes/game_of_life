(function(exports) {
  "use strict";

  function Cell(isAlive) {
    this.isAlive = isAlive;
  }
  exports.Cell = Cell;

  Cell.prototype = {
    alive: function() { return this.isAlive },

    age: function(numberOfLiveNeighbours) {
      if(numberOfLiveNeighbours < 0 || numberOfLiveNeighbours > 8) {
        throw new Error('Invalid neighbor count');
      }
      
      if ( this.isAlive ) {
        this.isAlive = numberOfLiveNeighbours === 2 || numberOfLiveNeighbours === 3;
      } else {
        this.isAlive = numberOfLiveNeighbours === 3;
      }
    }
  };

})(this);