var assert = require('chai').assert;
let callFunction = require('../Gambler/GamblerBL');
describe("This is test code for gambler program", () => {
    it("givenInputs_whenChecked_shouldReturnEqual 1", () => {
        assert.equal(callFunction.gambling(150, 250, 10));
    });
    it("givenInputs_whenChecked_shouldReturnEqual 2", () => {
        assert.equal(callFunction.gambling(1500, 2000, 20));
    });
    it("givenInputs_whenChecked_shouldReturnEqual 3", () => {
        assert.equal(callFunction.gambling());   //empty
    });
    it("givenInputs_whenChecked_shouldReturnEqual 4", () => {
        assert.notDeepEqual(callFunction.gambling(150, -520)); //not defined
    });
    it("givenInputs_whenChecked_shouldReturnEqual 5", () => {
        assert.equal(callFunction.gambling(null))   //null value
    });
    it("givenInputs_whenChecked_shouldReturnEqual 6", () => {
        assert.doesNotThrow(callFunction.gambling(2000, null, not)) //null and not defined
    });
    it("givenInputs_whenChecked_shouldReturnEqual 7", () => {
        assert.equal(callFunction.gambling(2000, 1500, 20))
    });
    it("givenInputs_whenChecked_shouldReturnEqual 8", () => {
        assert.equal(callFunction.gambling(2000, 1))
    });
    it("givenInputs_whenChecked_shouldReturnEqual 9", () => {
        assert.equal(callFunction.gambling(200, 250, 40))
    });
    it("givenInputs_whenChecked_shouldReturnEqual 10", () => {
        assert.equal(callFunction.gambling(20, 10, 0))
    });
});
