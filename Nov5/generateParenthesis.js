/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = []
  let helper = (str, left, right) => {
    if (left == 0 && right == 0) {
      result.push(str)
      return
    }
    if (left > 0) {
      helper(str + '(', left - 1, right)
    }
    if (right > left) {
      helper(str + ')', left, right - 1)
    }
  }
  helper('', n, n)
  return result
};

// Testing

console.log(generateParenthesis(3))