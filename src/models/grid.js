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
