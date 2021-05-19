/*
A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.

Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.

Example 1:

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
Example 2:

Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]
Example 3:

Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]

Constraints:

transactions.length <= 1000
Each transactions[i] takes the form "{name},{time},{amount},{city}"
Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
Each {time} consist of digits, and represent an integer between 0 and 1000.
Each {amount} consist of digits, and represent an integer between 0 and 2000.

*/
/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
  // My attempt


  // let setInd = new Set()
  // let result = []

  // let nameObj = {}

  // transactions.forEach((string, i) => {
  //   let array = string.split(',')
  //   if (Number(array[2]) > 1000) {
  //     setInd.add(i)
  //   }
  //   if (nameObj[array[0]] === undefined) {
  //     nameObj[array[0]] = [array[1], array[3]]
  //   } else {
  //     if (nameObj[array[0]][1] !== array[3] && nameObj[array[0]][0] - array[1] <= 60) {
  //       setInd.add(i)
  //     }
  //   }
  // })
  // if (setInd.size > 0) {
  //   setInd.forEach(index => {
  //     result.push(transactions[index])
  //   })
  // }

  // return result

  // Copied attempt:

  const invalid = new Set();
	const info = [];

	// create info arr: each element contains an obj with name, time, price, city, & raw string of input
	for (let trans of transactions) {
		let [name, time, price, city] = trans.split(",");
		info.push({name, time, price, city, raw: trans});
	}
	// sort ascending times
	info.sort((a, b) => Number(a.time) - Number(b.time));

	// add to invalid if price > 1000
	for (let infoEl of info) {
		if (infoEl.price > 1000) {
			invalid.add(infoEl.raw);
		}
	}
	// add elements to invalid if (within 60 time of eachother, diff city, same name)
	for (let i = 0; i < info.length-1; i++) {
		let curr = info[i];
		let nextI = i+1;

		while (nextI < info.length && (info[nextI].time - curr.time <= 60)) {
			if (curr.name === info[nextI].name && curr.city !== info[nextI].city) {
				invalid.add(curr.raw);
				invalid.add(info[nextI].raw)
			}
			nextI++;
		}
	}
	return Array.from(invalid);
};

// Testing

console.log(invalidTransactions(["alice,20,800,mtv","alice,50,200,beijing"]))
console.log('Should be ["alice,50,200,beijing"]')
console.log(invalidTransactions(["alice,20,800,mtv","bob,50,1200,mtv"]))
console.log('Should be ["bob,50,1200,mtv"]')