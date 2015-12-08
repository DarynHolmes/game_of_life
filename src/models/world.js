(function(exports) {
  "use strict";

  function World(rows, cols, strategy) {
    this.rows = rows;
    this.cols = cols;
    this.strategy = strategy;

    var cells = [];    
    for(var r = 0; r < this.rows; r++) {
      if (!cells[r]) {
        cells[r] = [];
      }
      for(var c = 0; c < this.cols; c++) {
         cells[r][c] = strategy(r,c);
      }
    }  
    this.cells = cells;


  }
  exports.World = World;

  World.prototype = {
    each: function(callback) {
      for(var r = 0; r < this.rows; r++) {
        for(var c = 0; c < this.cols; c++) {
            callback(this.cells[r][c], r, c); 
        }
      }
    },
    age: function() {

      var newCells = [];

      for(var r = 0; r < this.rows; r++) {
        for(var c = 0; c < this.cols; c++) {
          if (this.cells[r][c] === false && this.nrOfLiveNeighbors(r,c) === 2) {
            if (newCells[r]) {
                newCells[r][c] = false;
            }  else {
                newCells[r] = [];
                newCells[r][c] = false;
            }
          } else {
            if (newCells[r]) {
                newCells[r][c] = this.nrOfLiveNeighbors(r,c) === 3 || this.nrOfLiveNeighbors(r,c) === 2; 
            }  else {
                newCells[r] = [];
                newCells[r][c] = this.nrOfLiveNeighbors(r,c) === 3 || this.nrOfLiveNeighbors(r,c) === 2; 
            }
          }
        }
      }
      this.cells = newCells;
    },
    nrOfLiveNeighbors: function (r,c) {
      var count = 0;

      if (this.cells[r-1] && this.cells[r-1][c-1]) {
        count ++;
      }
      if (this.cells[r-1] && this.cells[r-1][c]) {
        count ++;
      }
      if (this.cells[r-1] && this.cells[r-1][c+1]) {
        count ++;
      }

      if (this.cells[r+1] && this.cells[r+1][c-1]) {
        count ++;
      }
      if (this.cells[r+1] && this.cells[r+1][c]) {
        count ++;
      }
      if (this.cells[r+1] && this.cells[r+1][c+1]) {
        count ++;
      }


      if (this.cells[r] && this.cells[r][c-1]) {
        count ++;
      }
      if (this.cells[r] && this.cells[r][c+1]) {
        count ++;
      }

      return count;
    }
  };

})(this);