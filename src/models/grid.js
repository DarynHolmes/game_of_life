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
