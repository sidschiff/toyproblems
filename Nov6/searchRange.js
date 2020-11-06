/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]


Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let index = getIndex(nums, target)
  if (index == -1) return [-1, -1]
  let left = index, right = index, range = true
  while (range) {
    if (nums[left - 1] == target) {
      left = left - 1
    }
    if (nums[right + 1] == target) {
      right = right + 1
    }
    if (nums[left - 1] != target && nums[right + 1] != target) {
      return [left, right]
      range = false
    }
  }
};

let getIndex = (array, target) => {
  let left = 0, right = array.length - 1
  if (array[left] == target) return left
  if (array[right] == target) return right
  while (left < right) {
    if (array[left] == target) return left
    if (array[right] == target) return right
    let mid = Math.floor((left + right) / 2)
    if (array[mid] == target) return mid
    if (array[mid] > target) right = mid - 1
    else if (array[mid] < target) left = mid + 1
  }
  return -1
}

// Testing
console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))
console.log(searchRange([0], 0))