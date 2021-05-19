/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i , j]
      }
    }
  }
};

// Passed

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let string = x.toString()
  let rev = string.split('').reverse().join('')
  if (string === rev) {
   return true
  } else {
    return false
  }
};

// Passed

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const dict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let result = 0
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] < dict[s[i + 1]]) {
      result -= dict[s[i]]
    } else {
      result += dict[s[i]]
    }
  }
  return result
};
