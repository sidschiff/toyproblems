/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) return []
  const dict = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }

  let result = []

  let getPerm = (working, index) => {
    if (index == digits.length) {
      result.push(working)
      return

    }
    for (let letter of dict[digits[index]]) {
      getPerm(working + letter, index + 1)
    }
  }

  getPerm('', 0)
  return result
};

// Testing

console.log(letterCombinations('2'))
console.log(letterCombinations('23'))