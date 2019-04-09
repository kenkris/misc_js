'use-strict'

let chai = require('chai');
let expect = chai.expect;


chai.should();

isEven = value => {
    return value % 2 === 0;
}

addNumbers = (num1, num2) => {
    return num1 + num2;
}

describe("isEven", () => {
    it("should return true when value is even", () => {
        isEven(8).should.be.true;
    });

    it("should return false when value is odd", () => {
        expect(isEven(3)).to.be.false;
    });
});

describe("addNumbers", () =>{
    let num;

    // reset init value for each assertion
    beforeEach(() => {
        num = 10;
    });

    it("should return 15 when adding 5 to 10", () => {
        num = addNumbers(num, 5);
        num.should.equal(15);
    });
    it("should return 23 when adding 13 to 10", () => {
        num = addNumbers(num, 13);
        num.should.equal(23);
    });
});
