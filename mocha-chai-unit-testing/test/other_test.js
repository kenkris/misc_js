'use-strict'

let chai = require('chai');
let expect = chai.expect;

chai.should();

isEven = value => {
    return value % 2 === 0;
}

describe("Other test file", () => {
    describe("isEven", () => {
        it("should return true when value is even", () => {
            isEven(8).should.be.true;
        });

        it("should return false when value is odd", () => {
            expect(isEven(3)).to.be.false;
        });
    });
});