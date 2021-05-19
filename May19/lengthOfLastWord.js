var lengthOfLastWord = function(s) {
  if (!s.length) return 0
  let last = s.trim().split(' ').pop()
  return last.length
};

console.log(lengthOfLastWord('a '))