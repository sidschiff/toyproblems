var singleNumber = function(nums) {
  let obj = {}
  for (let num of nums) {
    if (obj[num] == num) {
      delete obj[num]
    } else {
      obj[num] = num
    }
  }
  return Object.keys(obj)[0]
};