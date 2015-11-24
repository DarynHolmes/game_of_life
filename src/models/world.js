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
      for(var r = 0; r < this.rows; r++) {
        for(var c = 0; c < this.cols; c++) {
            this.cells[r][c] = this.cells[r][c] && this.nrOfLiveNeighbors(r,c) === 3; 
        }
      }
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

      console.log("AAAAAAAAAAAAAAAA " +count);
      return count;
    }
  };

})(this);