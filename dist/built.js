/*! game_of_life - v1.0.0 - 2015-10-13 */
// src/models/cell.js
(function(exports) {
  "use strict";

  function Cell() {
    this.alive = true;
  }
  exports.Cell = Cell;

  Cell.prototype = {
    alive: function() { return this.alive },

    age: function() {
      this.alive = false;
      return;
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