/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Follow up:

Your algorithm should run in O(n) time and uses constant extra space.
*/
var firstMissingPositive = function (nums) {
  let val = 1
  if (!nums.length) {
    return val
  }
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    if (val < curr && val !== 0) {
      return val
    }
    val = curr + 1
    if (val <= 0) {
      val = 1
    }
  }
  return val
};

// Testing
console.log('1', firstMissingPositive([-5]))
console.log('3', firstMissingPositive([1, 2, 0]))
console.log('2', firstMissingPositive([3, 4, -1, 1]))
console.log('1', firstMissingPositive([7, 8, 9, 11, 12]))