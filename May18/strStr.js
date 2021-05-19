var strStr = function(haystack, needle) {
  if (needle === "") return 0
  for (let i = 0, j = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) j++
    else (i -= j, j = 0)
    if (j === needle.length) return i - j + 1
  }
  return -1
};