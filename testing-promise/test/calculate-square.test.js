const calculateSquare = require('../src/calculate-square.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { describe } = require('mocha');
const { assert } = require('chai');
const { notify } = require('mocha/lib/nodejs/growl');
const Mocha = require('mocha/lib/mocha');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('calculateSquare', () => {

    it('Should be resolved with number 16 if passed number 4.', () => {
        return expect(calculateSquare(4)).to.eventually.be.equal(16);
    });

    it('Should be fulfilled if passed number 5.', () => {
        return expect(calculateSquare(4)).to.eventually.be.fulfilled;
    });

    it('Should be rejected if passed a string.', (done) => {
        expect(calculateSquare('string')).to.eventually.be.rejected.notify(done);
    });

    it('Should be resolved with number 100 if passed number 10.', (done) => {
        let square = calculateSquare(10)
            .then(result => square = result)
            .catch(error => square = error);
        setTimeout(() => {
            assert.strictEqual(101, square);
            done();
        }, 1000);

    });

    it('Multiple expect in one test.', () => {
        
        return calculateSquare(1000)
            .then(result => {
                expect(result).to.equal(1000000);
                expect(result).to.lessThanOrEqual(3000000000);
                expect(result).to.greaterThan(1);
            });
    });

    it('Multiple expect in one test with rejection.', () => {
        
        return calculateSquare(true)
        .catch(error => {
            expect(error).to.not.equal(null);
            expect(error.message).to.equal('Invalid type: Cant square, not a number.');
        }); 
    });

}).timeout(10000); //or in describe() this.timeout(10000);