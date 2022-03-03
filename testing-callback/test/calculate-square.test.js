const { assert } = require('chai');
const calculateSquare = require(`../calculate-square.js`);
const expect = require('chai').expect;

describe('calculateSquare', () => {
    it('It should return 4 if passed 2', (done) => {
        calculateSquare(2, (error, result) => {
            expect(result).to.equal(4);
            done();
        });
    }).timeout(10000);
    
    it('It should return Error if passed NaN', (done) => {
        calculateSquare(true, (error, result) => {
            assert.instanceOf(error, Error, 'There is no error on calculateSquare(true).');
            done();
        });
    }).timeout(10000);
});
