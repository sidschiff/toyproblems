var isPalindrome = function(s) {
  let string = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
  return string.split('').reverse().join('') === string ? true : false
};