/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

  let rotateOnce = (nums) => {
    let end = nums[nums.length - 1]
    for (let i = nums.length - 1; i >= 0; i--) {
      if (i === 0) {
        nums[i] = end
      } else {
        nums[i] = nums[i - 1]
      }
    }
  }

  while (k > 0) {
    rotateOnce(nums)
    k--
  }
};

// Testing

console.log(rotate([1,2,3,4,5,6,7], 3))