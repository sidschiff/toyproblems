var plusOne = function(digits) {
  let current = digits.length - 1
  let helper = (array, index) => {
    if  (digits[current] === 9 && current > 0) {
      digits[current] = 0
      current--
      helper(digits, current)
    } else if (digits[current] === 9) {
      digits[current] = 0
      digits.unshift(1)
    } else {
      digits[current]++
    }
  }
  helper(digits, current)
  return digits
};