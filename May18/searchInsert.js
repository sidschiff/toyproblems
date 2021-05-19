var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    left = (nums[mid] < target) ? mid + 1 : left
    right = (nums[mid] > target) ? mid - 1 : right
    if (nums[mid] === target) return mid
  }
  return left
};