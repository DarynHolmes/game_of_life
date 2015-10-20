/*! game_of_life - v1.0.0 - 2015-10-20 */
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
      if(numberOfLiveNeighbours < 0) {
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