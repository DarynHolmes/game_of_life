
var expect = chai.expect;

describe("World", function() {
  var world;
    
  beforeEach(function() {
    
  });

  xit("should iterate over the cells", function() {
     world = new World(1,1);
     var count = 0;

     world.eachCell(function(isAlive, x, y){
      count++;
      expect(isAlive).to.equal(false);
      expect(x).to.equal(1);
      expect(y).to.equal(1);
     });

     expect(count).to.equal(1);

  });

  it("should iterate over ALL the cells", function(){
    world = new World(2,2);
    var count = 0;

    var arr = [ [5, 5], [5, 5] ];

    world.eachCell(function(isAlive, x, y){
      arr[x][y] = isAlive;
      expect(isAlive).to.equal(false);
      count++;
    });

    // var a = [ [true, false], [false, false] ];

    expect(count).to.equal(4);
    expect(arr[0][0]).to.be.false;
    expect(arr[0][1]).to.be.false;
    expect(arr[1][0]).to.be.false;
    expect(arr[1][1]).to.be.false;
  });

});