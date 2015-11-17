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
            this.cells[r][c] = false; 
        }
      }
    }

    
  };

})(this);