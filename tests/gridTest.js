var expect = chai.expect;

describe("Grid", function() {
  var grid;

  describe("that is one cell by one cell", function () {
      it("should tell us the cell has no live neighbours", function () {
          grid = new Grid(1,1);
          expect(grid.numberOfLiveNeighbours(0,0)).to.equal(0);
      });
  });

  describe("that is 2x2 cell", function () {
      it("should tell us the cell has 3 live neighbours", function () {
          grid = new Grid(2,2);
          grid.put(0, 0, new Cell(true));
          grid.put(0, 1, new Cell(true));
          grid.put(1, 0, new Cell(true));
          grid.put(1, 1, new Cell(true));
          expect(grid.numberOfLiveNeighbours(0,0)).to.equal(3);
      });
  });

});
