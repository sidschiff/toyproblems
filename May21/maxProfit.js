var maxProfit = function(prices) {
  let max = 0
  for (let i = 0; i < prices.length; i++) {
      if (prices[i + 1] > prices[i]) {
        max += prices[i + 1] - prices[i]
      }
  }
  return max
};