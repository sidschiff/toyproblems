var longestCommonPrefix = function(strs) {
  // Edge Case
  if (strs[0] === "" || strs.length === 0) {
    return ""
  }
  strs.sort((a,b) => b.length - a.length)
  let result = ""
  let currentIndex = 0
  let currentWord = 0
  let stop = false
  // Add first letter
  result += strs[0][0]
  while (!stop) {
    if (strs[currentWord][currentIndex] === result[currentIndex]) {
      // Move on
      // Check Word
      if (strs[currentWord + 1] === undefined) {
        if (currentWord == 0 || currentIndex > strs[currentWord].length) {
          stop = true
        }
        currentWord = 0
        currentIndex++
        // console.log(currentIndex)
      } else {
        currentWord++
      }
    } else {
      // Check whether to stop or add
      if (currentWord == 0) {
        result += strs[currentWord][currentIndex]
      } else {
        // Remove the most recent addition
        result = result.slice(0, result.length - 1)
        stop = true
      }
    }
  }
  return result
};

console.log('Output: fl', longestCommonPrefix(['flower', 'flow', 'flight']))
console.log('Output: ""', longestCommonPrefix(['dog', 'racecar', 'car']))
console.log('Output: ""', longestCommonPrefix(['']))
console.log('Output: "a"', longestCommonPrefix(['a']))
console.log('Output: "a"', longestCommonPrefix(['a', 'ac']))
console.log('Output: "flower"', longestCommonPrefix(['flower', 'flower', 'flower', 'flower']))