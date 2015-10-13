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