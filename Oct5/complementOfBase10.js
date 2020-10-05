/*
Every non-negative integer N has a binary representation.  For example, 5 can be represented as "101" in binary, 11 as "1011" in binary, and so on.  Note that except for N = 0, there are no leading zeroes in any binary representation.

The complement of a binary representation is the number in binary you get when changing every 1 to a 0 and 0 to a 1.  For example, the complement of "101" in binary is "010" in binary.

For a given number N in base-10, return the complement of it's binary representation as a base-10 integer.



Example 1:

Input: 5
Output: 2
Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.
Example 2:

Input: 7
Output: 0
Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.
Example 3:

Input: 10
Output: 5
Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.


Note:

0 <= N < 10^9
This question is the same as 476: https://leetcode.com/problems/number-complement/
*/

/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  // NOT WORKING. DO NOT UNDERSTAND BASE-10
  if (N == 0) return 1
  let binary = N.toString(2)
  console.log('binary', binary)
  let complement = binary.split('').map((letter, i, array) => {
    // console.log('current letter', array[i])
    if (letter === '0') {
      array[i] = '1'
      // console.log('after change', array[i])
    } else {
      if (letter === '1') {
        array[i] = '0'
        // console.log('after change', array[i])
      }
    }
    return array[i]
  }).join('')
  console.log('complement', complement)
};

// Testing
console.log(bitwiseComplement(0))