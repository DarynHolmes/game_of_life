(function(exports) {
  "use strict";

  function World() {
    
  }
  exports.World = World;

  World.prototype = {
    eachCell: function(callback) { 
      callback(false,0,0);
      callback(false,0,1);
      callback(false,1,0);
      callback(false,1,1);
    }

    
  };

})(this);