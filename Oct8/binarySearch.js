/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1


Note:

You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  let recurse = (array, target, low, high) => {
    let mid = Math.floor(high - low)
    let value = array[mid]
    if (array[low] === target) {
      return low
    }
    if (array[high] === target) {
      return high
    }
    if (value === target) {
      return mid
    }
    if (mid <= 1) {
      return -1
    }
    if (value > target) {
      return recurse(array, target, low, mid - 1)
    }
    if (value < target) {
      return recurse(array, target, mid + 1, high)
    }
  }

  return recurse(nums, target, 0, nums.length - 1)
};

// Testing

console.log('Should return 4:', search([-1,0,3,5,9,12], 9))
console.log('Should return -1:', search([-1,0,3,5,9,12], 2))
console.log('Should return -1:', search([-5], 5))