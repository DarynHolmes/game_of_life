/*! game_of_life - v1.0.0 - 2015-10-27 */
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

// src/models/cow.js
// (function(exports) {
//   "use strict";

//   function Cow(name) {
//     this.name = name || "Anon cow";
//   }
//   exports.Cow = Cow;

//   Cow.prototype = {
//     greets: function(target) {
//       if (!target)
//         throw new Error("missing target");
//       return this.name + " greets " + target;
//     }
//   };
// })(this);
// src/models/grid.js
(function(exports) {
  "use strict";

  function Grid(x,y) {
      this.cells = new Array();
  }
  exports.Grid = Grid;

  Grid.prototype = {
      numberOfLiveNeighbours: function (x,y) {
        var alive = 0;
        for (var i = 0; i < this.cells.length; i++) {
            for (var h = 0; h < this.cells[i].length; h++) {
                var cell = this.cells[i][h];
                if(cell.alive){
                    if(i != x || h != y){
                        alive++;
                    }

                }
            }
        }
        return alive;
      },
      put: function(x, y, cell) {
          if(!this.cells[x]){
            this.cells[x] = new Array();
          }
          this.cells[x][y] = cell;
      }
  };

})(this);
