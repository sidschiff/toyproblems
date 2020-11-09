/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

  let result = []

  let helper = (array, working) => {
    if (array.length == 0) {
      result.push(working)
      return
    }

    for (let i = 0; i < array.length; i++) {
      let k = array[i]
      array.splice(i, 1)
      helper(array, [...working, k])
      array.splice(i, 0, k)
    }
  }


  helper(nums, [])
  return result
};

// Testing

console.log(permute([1,2,3]))