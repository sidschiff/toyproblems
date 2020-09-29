/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

/*
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let count = 0
  let origWord = s

  let searchDict = (s, dict, idx = 0) => {
    let currentWord = s
    if (currentWord.length === 0) {
      // console.log('true')
      return true
    }
    if (dict[idx]) {
      if (currentWord.length < dict[idx].length) {
        return searchDict(currentWord, dict, idx + 1)
      } else {
        for (let i = idx; i < dict.length; i++) {
          if (currentWord.indexOf(dict[i]) === 0) {
            currentWord = currentWord.slice(dict[i].length)
            return searchDict(currentWord, dict, i)
          } else {
            return searchDict(currentWord, dict, i + 1)
          }
        }
      }
    }
    if (count < dict.length) {
      count++
      if (origWord.length > currentWord.length) {
        // restart with current word
        return searchDict(currentWord, dict)
      } else {
        return searchDict(origWord, dict, count)
      }
    }
      // console.log('false')
    return false
  }

  return searchDict(s, wordDict, 0)
};

console.log('true: ', wordBreak('codeleet', ['leet', 'code']))
console.log('true: ', wordBreak("applepenapple", ["apple", "pen"]))
console.log('false: ', wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
console.log('false: ', wordBreak('a', ['b']))
console.log('true: ', wordBreak('cars', ['car', 'ca', 'rs']))