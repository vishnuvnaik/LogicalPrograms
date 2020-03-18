var assert = require('chai').assert;
let callFunction = require('../Gambler/GamblerBL');
describe("This is test code for gambler program", () => {
    it("givenInputs_whenChecked_shouldReturnEqual", () => {
        assert.equal(callFunction.gambling(150, 250, 50, 3));
    });
    it("givenInputs_whenChecked_shouldReturnEqual", () => {
        assert.equal(callFunction.gambling(1500, 2000, 100, 3));
    });
    it("givenInputs_whenChecked_shouldReturnEqual", () => {
        assert.equal(callFunction.gambling());
    });
    it("givenInputs_whenChecked_shouldReturnEqual", () => {
        assert.false(callFunction.gambling(150, notdefined));
    });
    it("givenInputs_whenChecked_shouldReturnEqual", () => {
        assert.equal(callFunction.gambling(null))
    });
    it("givenInputs_whenChecked_shouldReturnEqual", () => {
        assert.equal(callFunction.gambling(2000, null, not))
    });
    it("givenInputs_whenChecked_shouldReturnEqual", () => {
        assert.equal(callFunction.gambling(2000, 1500, 3000))
    });
    it("givenInputs_whenChecked_shouldReturnEqual", () => {
        assert.equal(callFunction.gambling(2000, 1))
    });
    it("givenInputs_whenChecked_shouldReturnEqual", () => {
        assert.equal(callFunction.gambling(200, 150, 350))
    });
    it("givenInputs_whenChecked_shouldReturnEqual", () => {
        assert.equal(callFunction.gambling(2000, 5000, 1999, 3))
    });
});
