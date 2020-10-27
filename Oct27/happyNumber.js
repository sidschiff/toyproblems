/*
Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let result = false

  let helper = (n, count = 0) => {
    if (count > 5) {
      return result
    }
    let curr = 0
    let string = n.toString()
    if (string.length > 1) {
      let array = string.split('')
      array.forEach(number => {
        curr += Number(number) * Number(number)
      })
    } else {
      curr += n * n
    }
    if (curr == 1) {
      result = true
      return result
    }
    helper(curr, count + 1)
  }
  helper(n, null)
  return result
};

// Testing
// console.log(isHappy(19))
console.log(isHappy(2))