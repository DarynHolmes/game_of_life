

document.addEventListener("DOMContentLoaded", function () {


  var world = new World(100,100, function(r,c) {
    // if (r === 1 && c === 0) {
    //   return true;
    // }
    // if (r === 1 && c === 1) {
    //   return true;
    // }
    // if (r === 1 && c === 2) {
    //   return true;
    // }


    return Math.random() < 0.5;
    // return ((Math.random() * 100) % 2) == 0;
  });

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  

  var work = function() {
    world.each(function(isAlive, x, y){
      if ( isAlive ) {
        ctx.fillStyle = "#000000";

      }
      else {
        ctx.fillStyle = "#CC9900";
      }
      ctx.fillRect(y * 10, x * 10,10,10);

    });
    world.age();
  };

  setInterval(work, 100);

  
});