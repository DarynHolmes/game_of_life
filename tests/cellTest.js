
var expect = chai.expect;

describe("Cell", function() {
  var cell;

  describe("that is alive", function() {
    
    beforeEach(function() {
      cell = new Cell(true);
    });

    it("should be alive if specified", function() {
       expect(cell.alive()).to.be.true;
    });

    it("should die if it only has 1 live neighbor", function() {
       cell.age(1);
       expect(cell.alive()).to.be.false;
    });

    it("should die if it only has 0 live neighbors", function() {
       cell.age(0);
       expect(cell.alive()).to.be.false;
    });

    it("should live on if it has two live neighbors", function () {
        cell.age(2);
        expect(cell.alive()).to.be.true;
    });

    it("should live on if it has three live neighbors", function () {
        cell.age(3);
        expect(cell.alive()).to.be.true;
    });

    it("should die if it has four live neighbors", function () {
        cell.age(4);
        expect(cell.alive()).to.be.false;
    });

  });

  describe("that is dead", function() {

    beforeEach(function() {
      cell = new Cell(false);
    });

    it("should be dead if specified to be dead", function() {
       expect(cell.alive()).to.be.false;
    });

    it("should become alive again if dead with 3 live neighbors", function () {
        cell.age(3);
        expect(cell.alive()).to.be.true;
    });

    it("should stay dead if it has less than 3 live neighbors", function () {
        cell.age(2);
        expect(cell.alive()).to.be.false;
        cell.age(0);
        expect(cell.alive()).to.be.false;
    });

    it("should stay dead if it more than 3 live neighbors", function () {
        cell.age(4);
        expect(cell.alive()).to.be.false;
        cell.age(8);
        expect(cell.alive()).to.be.false;
    });

  });

  describe("that is used incorrectly", function() {

    beforeEach(function() {
      cell = new Cell(false);
    });

    it("should throw an exception if there are negative neighbors", function() {
      var block = function() { cell.age(-1) };
       expect(block).to.throw('Invalid neighbor count');
    });

    xit("should throw an exception if there are more than 8 neighbors", function() {
      var block = function() { cell.age(9) };
       expect(block).to.throw('Invalid neighbor count');
    });

  });

});