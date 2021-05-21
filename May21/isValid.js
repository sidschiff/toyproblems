var isValid = function(s) {
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  let stack = []

  for (let char of s) {
    if (!map[char]) stack.push(char)
    else if (stack.pop() !== map[char]) return false
  }
  return stack.length === 0
};