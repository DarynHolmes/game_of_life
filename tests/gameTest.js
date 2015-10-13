
var expect = chai.expect;

describe("Cell", function() {
  
    it("should be alive on creation", function() {
       var cell = new Cell();
       expect(cell.alive).to.be.true;
    });

    it("should die if it only has 1 neighbor", function() {
       var cell = new Cell();
       cell.age();
       expect(cell.alive).to.be.false;
    });

});