
var expect = chai.expect;

describe("World", function() {
  var world;
    
  beforeEach(function() {
    
  });

  it("should iterate over a 1x1 world", function() {
     world = new World(1,1, function(x,y) {
      return false;
     });
     var count = 0;

     world.each(function(isAlive, x, y){
      count++;
      expect(isAlive).to.equal(false);
      expect(x).to.equal(0);
      expect(y).to.equal(0);
     });

     expect(count).to.equal(1);

  });

  it("should iterate over a 2x2 world", function(){
    world = new World(2,2, function(x,y) {
      return x === 0 && y === 0;
    });
    var count = 0;

    var arr = [ [undefined, undefined], [undefined, undefined] ];

    world.each(function(isAlive, x, y){
      arr[x][y] = isAlive;
      count++;
    });

    console.log("HELLO");
    console.log(arr[0][0]);

    expect(count).to.equal(4);

    expect(arr[0][0]).to.be.true;
    expect(arr[0][1]).to.be.false;
    expect(arr[1][0]).to.be.false;
    expect(arr[1][1]).to.be.false;
  });

  describe("Age", function() { 
    it("should keep a dead cell dead, if it has no live neighbors", function() {
         world = new World(3,3, function(x,y) {
          return false;
         });

         world.age();

         world.each(function(isAlive, x, y){
          expect(isAlive).to.be.false;
         });

      });

    it("should make a live cell with no neighbors die", function() {
      world = new World(3,3, function(r,c) {
        return r === 0 && c === 0;
      });

      var arr = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
      ];

      world.age();

      world.each(function(isAlive, x, y){
        arr[x][y] = isAlive;
      });

      expect(arr[0][0]).to.be.false;

    })

    it("should make a live cell with no neighbors die", function() {
      world = new World(3,3, function(r,c) {
        return r !== 0 && c !== 0;
      });

      var arr = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
      ];

      world.age();

      world.each(function(isAlive, x, y){
        arr[x][y] = isAlive;
      });

      expect(arr[0][0]).to.be.true;

    })

  });


});