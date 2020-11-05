/*
You are given an integer array nums sorted in ascending order, and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, return -1.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] == target) return mid
    if (nums[left] == target) return left
    if (nums[right] == target) return right
    if (nums[mid] > nums[left]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1
      else left = mid + 1
    }
    else if (nums[mid] < nums[right]) {
      if (target <= nums[right] && target > nums[mid]) left = mid + 1
      else right = mid - 1
    }
    else break
  }
  return nums[right] == target ? right : -1
};