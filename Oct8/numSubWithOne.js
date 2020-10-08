/*
Given a binary string s (a string consisting only of '0' and '1's).

Return the number of substrings with all characters 1's.

Since the answer may be too large, return it modulo 10^9 + 7.

Example 1:

Input: s = "0110111"
Output: 9
Explanation: There are 9 substring in total with only 1's characters.
"1" -> 5 times.
"11" -> 3 times.
"111" -> 1 time.
Example 2:

Input: s = "101"
Output: 2
Explanation: Substring "1" is shown 2 times in s.
Example 3:

Input: s = "111111"
Output: 21
Explanation: Each substring contains only 1's characters.
Example 4:

Input: s = "000"
Output: 0


Constraints:

s[i] == '0' or s[i] == '1'
1 <= s.length <= 10^5
*/

/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
  // create result
  // iterate over string
  // if current letter is 1, start count
    // increment for each consecutive 1
    // if current breaks consecutive
      // add (n + 1) * n to result where n is count
      // reset count

  let result = 0
  let count = 0
  let mod = Math.pow(10, 9) + 7
  for (let i = 0; i <= s.length; i++) {
    if (s[i] == '1') {
      count++
    } else {
      if (count >= 1) {
        result += ((count + 1) * count) / 2
        count = 0
      }
    }
  }
  return result % mod
};

// Testing

console.log('9:', numSub("0110111"))
console.log('2:', numSub("101"))
console.log('21:', numSub("111111"))
console.log('0:', numSub('000'))