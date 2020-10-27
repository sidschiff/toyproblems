/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let result = false
  if (s.length !== t.length) {
    return result
  }
  let sObj = {}
  s.split('').forEach(letter => {
    if (!sObj[letter]) {
      sObj[letter] = 1
    } else {
      sObj[letter]++
    }
  })
  let tObj = {}
  t.split('').forEach(letter => {
    if (!tObj[letter]) {
      tObj[letter] = 1
    } else {
      tObj[letter]++
    }
  })
  for (let key in tObj) {
    if (tObj[key] == sObj[key]) continue
    else return result
  }
  result = true
  return result
};

// Testing
console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))