/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/
function largestPairSum(numbers)
{
  var myNumbers = numbers.sort((a, b)=> b - a);
  return myNumbers[0] + myNumbers[1];
}
/*
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(largestPairSum([10,14,2,23,19]), 42 , "Sum should be 42");
    assert.strictEqual(largestPairSum([-100,-29,-24,-19,19]), 0 , "Sum should be 0");
    assert.strictEqual(largestPairSum([1,2,3,4,6,-1,2]), 10 , "Sum should be 10");
    assert.strictEqual(largestPairSum([-10, -8, -16, -18, -19]), -18 , "Sum should be -18");
    })
  })
*/