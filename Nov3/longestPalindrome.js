/*
Given a string s, return the longest palindromic substring in s.



Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"


Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  for (let j = s.length - 1; j >= 0; j--) {
    let i = 0, k = j
    while (k < s.length) {
      let substr = s.substring(i, k + 1)
      if (isPalindrome(substr)) return substr
      i++, k++
    }
  }
  return ""
};

let isPalindrome = (string) => {
  let l = 0, r = string.length - 1
  while (l < r) {
    if (string[l] !== string[r]) return false
    l++, r--
  }
  return true
}