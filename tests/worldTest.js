
var expect = chai.expect;

describe("World", function() {
  var world;
    
  beforeEach(function() {
    
  });

  describe("Iterating", function() { 

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

      expect(count).to.equal(4);

      expect(arr[0][0]).to.be.true;
      expect(arr[0][1]).to.be.false;
      expect(arr[1][0]).to.be.false;
      expect(arr[1][1]).to.be.false;
    });

    it("should iterate over a 2x2 world mostly alive", function(){
      world = new World(2,2, function(x,y) {
        return x !== 0 || y !== 0;
      });
      var count = 0;

      var arr = [ [undefined, undefined], [undefined, undefined] ];

      world.each(function(isAlive, x, y){
        arr[x][y] = isAlive;
        count++;
      });

      expect(count).to.equal(4);

      expect(arr[0][0]).to.be.false;
      expect(arr[0][1]).to.be.true;
      expect(arr[1][0]).to.be.true;
      expect(arr[1][1]).to.be.true;
    });
  });

  describe("aging over a single generation", function() { 
    it("a dead cell stays dead, if it has no live neighbors", function() {
         world = new World(3,3, function(x,y) {
          return false;
         });

         world.age();

         world.each(function(isAlive, x, y){
          expect(isAlive).to.be.false;
         });

      });

    it("a live cell with no neighbors die", function() {
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

    });

    it("a dead cell with 3 live neighbors come alive", function() {
      world = new World(3,3, function(r,c) {
        if (r === 0 && c === 0) {
          return false;
        }
        return true;
        // return r !== 0 || c !== 0;
      });

      var arr = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
      ];

      expect(world.nrOfLiveNeighbors(0,0)).to.equal(3, "Wrong number of live neighbors");

      world.age();

      world.each(function(isAlive, x, y){
        arr[x][y] = isAlive;
      });

      expect(arr[0][0]).to.equal(true, "The cell did not come alive as expected");
    });


    it("a live cell with 4 live neighbors dies", function() {
      world = new World(3,3, function(r,c) {
        if (r === 0 && c === 0) {
          return true;
        }
        if (r === 1 && c === 0) {
          return true;
        }
        if (r === 0 && c === 1) {
          return true;
        }
        if (r === 1 && c === 1) {
          return true;
        }
        if (r === 2 && c === 2) {
          return true;
        }
        return false;
        // return r !== 0 || c !== 0;
      });

      var arr = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
      ];

      expect(world.nrOfLiveNeighbors(1,1)).to.equal(4, "Wrong number of live neighbors");

      world.age();

      world.each(function(isAlive, x, y){
        arr[x][y] = isAlive;
      });

      expect(arr[1][1]).to.equal(false, "The cell did not come alive as expected");
    });


    it("a live cell with no live neighbours dies, as if caused by under-population", function() {
        world = new World(3,3, function(r,c) {
          if (r === 0 && c === 0) {
            return true;
          }
          return false;
        });

        var arr = [
          [undefined, undefined, undefined],
          [undefined, undefined, undefined],
          [undefined, undefined, undefined]
        ];

        expect(world.nrOfLiveNeighbors(0,0)).to.equal(0, "Wrong number of live neighbors");

        world.age();

        world.each(function(isAlive, x, y){
          arr[x][y] = isAlive;
        });

        expect(arr[0][0]).to.equal(false, "The cell did not die as expected");
    });

    it("a live cell with two live neighbours lives on to the next generation", function() {
        world = new World(3,3, function(r,c) {
          if (r === 0 && c === 0) {
            return true;
          }
          if (r === 0 && c === 1) {
            return true;
          }
          if (r === 1 && c === 0) {
            return true;
          }
          return false;
        });

        var arr = [
          [undefined, undefined, undefined],
          [undefined, undefined, undefined],
          [undefined, undefined, undefined]
        ];

        expect(world.nrOfLiveNeighbors(0,0)).to.equal(2, "Wrong number of live neighbors");

        world.age();

        world.each(function(isAlive, x, y){
          arr[x][y] = isAlive;
        });

        expect(arr[0][0]).to.equal(true, "The cell did live on as expected");
    })

    it("a dead cell with two live neighbours remains dead", function() {
        world = new World(3,3, function(r,c) {
          if (r === 0 && c === 0) {
            return false;
          }
          if (r === 0 && c === 1) {
            return true;
          }
          if (r === 1 && c === 0) {
            return true;
          }
          return false;
        });

        var arr = [
          [undefined, undefined, undefined],
          [undefined, undefined, undefined],
          [undefined, undefined, undefined]
        ];

        expect(world.nrOfLiveNeighbors(0,0)).to.equal(2, "Wrong number of live neighbors");

        world.age();

        world.each(function(isAlive, x, y){
          arr[x][y] = isAlive;
        });

        expect(arr[0][0]).to.equal(false, "The cell is still dead as expected");
    })

    it("a live cell with three live neighbours remains alive", function() {
        world = new World(3,3, function(r,c) {
          return true;
        });

        var arr = [
          [undefined, undefined, undefined],
          [undefined, undefined, undefined],
          [undefined, undefined, undefined]
        ];

        expect(world.nrOfLiveNeighbors(0,0)).to.equal(3, "Wrong number of live neighbors");

        world.age();

        world.each(function(isAlive, x, y){
          arr[x][y] = isAlive;
        });

        expect(arr[0][0]).to.equal(true, "The cell is still alive as expected");
    })


    it("a live cell with one live neighbour dies", function() {
        world = new World(3,3, function(r,c) {
          if (r === 0 && c === 0) { return true; }
          if (r === 1 && c === 0) { return true; }
          return false;
        });

        var arr = [
          [undefined, undefined, undefined],
          [undefined, undefined, undefined],
          [undefined, undefined, undefined]
        ];

        expect(world.nrOfLiveNeighbors(0,0)).to.equal(1, "Wrong number of live neighbors");

        world.age();

        world.each(function(isAlive, x, y){
          arr[x][y] = isAlive;
        });

        expect(arr[0][0]).to.equal(false, "The cell is dead as expected");
    });

    it("a live cell with eight live neighbour dies", function() {
        world = new World(3,3, function(r,c) {
          return true;
        });

        var arr = [
          [undefined, undefined, undefined],
          [undefined, undefined, undefined],
          [undefined, undefined, undefined]
        ];

        expect(world.nrOfLiveNeighbors(1,1)).to.equal(8, "Wrong number of live neighbors");

        world.age();

        world.each(function(isAlive, x, y){
          arr[x][y] = isAlive;
        });

        expect(arr[1][1]).to.equal(false, "The cell is dead as expected");
    });

  });

  describe("aging over a multiple generations", function() { 

    it("the world should age twice correctly", function() {
        expect(true).to.equal(false, "The world did not age as expected");
    });

  });
});