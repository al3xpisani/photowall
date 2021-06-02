/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/

"use strict";

var nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};

// Write code here
var sumObjectValues = (nums) => {
  var total = 0;
  for (let k in nums) {
    if (typeof nums[k] === "number") total += nums[k];
  }
  return total;
};

console.log(sumObjectValues(nums));
//42
