/*
Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Example 1:

Input: A = "ab", B = "ba"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.

Example 2:

Input: A = "ab", B = "ab"
Output: false
Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.

Example 3:

Input: A = "aa", B = "aa"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.


Example 4:

Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true
Example 5:

Input: A = "", B = "aa"
Output: false

Constraints:

0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist of lowercase letters.
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length !== B.length) return false
  if (A === B && new Set(A).size < A.length) return true
  let aSeen = []
  let bSeen = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      aSeen.push(A[i])
      bSeen.push(B[i])
    }
  }
  return aSeen.length === 2 && aSeen.reverse().join('') === bSeen.join('')
};

// Testing

console.log('true', buddyStrings('ab', 'ba'))
console.log('false', buddyStrings('ab', 'ab'))
console.log('true', buddyStrings('aa', 'aa'))
console.log('true', buddyStrings('aaaaaabc', 'aaaaaacb'))
console.log('false', buddyStrings('', 'aa'))