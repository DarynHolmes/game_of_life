/*! game_of_life - v1.0.0 - 2015-11-03 */
// src/models/cell.js
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

// src/models/grid.js
(function(exports) {
  "use strict";

  function Grid() {
      this.cells = [];
  }
  exports.Grid = Grid;

  Grid.prototype = {

      init: function(input){
          var size = input[0].length;
          for(var i = 0; i < input.length; i++) {
            if ( size != input[i].length ) {
              throw new Error('Invalid dimensions');
            }
          }
      },

      numberOfLiveNeighbours: function (x,y) {
        var alive = 0;
        for (var i = 0; i < this.cells.length; i++) {
            for (var h = 0; h < this.cells[i].length; h++) {
                var cell = this.cells[i][h];
                if(cell.alive && (i != x || h != y)){
                        alive++;
                }
            }
        }
        return alive;
      },
      put: function(x, y, cell) {
          if(!this.cells[x]){
            this.cells[x] = [];
          }
          this.cells[x][y] = cell;
      },
      cell: function(x,y){
        return this.cells[x][y];
      }

  };

})(this);
