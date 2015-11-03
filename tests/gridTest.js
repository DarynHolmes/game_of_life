var expect = chai.expect;

describe("Grid", function() {
  var grid;

  describe("that is one cell by one cell", function () {
      it("should tell us the cell has no live neighbours", function () {
          grid = new Grid();
          expect(grid.numberOfLiveNeighbours(0,0)).to.equal(0);
      });
  });

  describe("that is 2x2 cell", function () {
      it("should tell us the cell has 3 live neighbours", function () {
          grid = new Grid();
          grid.put(0, 0, new Cell(true));
          grid.put(0, 1, new Cell(true));
          grid.put(1, 0, new Cell(true));
          grid.put(1, 1, new Cell(true));
          expect(grid.numberOfLiveNeighbours(0,0)).to.equal(3);
      });
  });

  describe("init function", function () {
      it("should throw an exception if grid was invalid", function () {

          var grid = new Grid();

          var block = function() { 
            grid.init( [ [true,true], [true] ] ); 
          };

       expect(block).to.throw('Invalid dimensions');

      });

      it("should not throw any exceptions if grid was valid", function () {

        var grid = new Grid();
        grid.init( [ [true,true], [false,false] ] ); 
        expect(grid.cell(0,0).alive).to.be(true);

      });
  });







});
