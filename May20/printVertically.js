var printVertically = function(s) {
  let result = [], maxLength = 0
  let words = s.split(' ')
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) maxLength = words[i].length
  }
  for (let i = 0; i < maxLength; i++) {
    result[i] = ''
    let current = ''
    for (let j = 0; j < words.length; j++) {
      words[j][i] === undefined ? (current += ' ') : ((result[i] += current + words[j][i]), (current = ''))
    }
  }
  return result
};

// Testing
let test1 = "HOW ARE YOU"
let test2 = "TO BE OR NOT TO BE"
let test3 = "CONTEST IS COMING"
let answ1 = ["HAY", "ORO", "WEU"]
let answ2 = ["TBONTB","OEROOE","   T"]
let answ3 = ["CIC","OSO","N M","T I","E N","S G","T"]

console.log(`Should be ${answ1}`, printVertically(test1))
console.log(`Should be ${answ2}`, printVertically(test2))
console.log(`Should be ${answ3}`, printVertically(test3))