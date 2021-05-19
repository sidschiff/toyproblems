/*
Giiven a collection of initervals, merge all overlapping intervals
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let result = []
  let i = 0
  while (i < intervals.length) {
    let current = intervals[i]
    if (intervals[i + 1]) {
      if (current[1] <= intervals[i + 1][1] && current[1] >= intervals[i + 1][0]) {
        intervals[i + 1] = [current[0], intervals[i + 1][1]]
        i++
      } else {
        // Check if duplicates
        if (intervals[i][0] === intervals[i + 1][0] && intervals[i][1] === intervals[i + 1][1]) {
          result.push(intervals[i])
          i += 2
        } else {
          // Check if next can be 'absorbed'
          if (current[1] >= intervals[i + 1][1] && current[0] <= intervals[i + 1][0]) {
            intervals[i + 1] = intervals[i]
            i++
          } else {
            result.push(intervals[i])
            i++
          }
        }
      }
    } else {
      result.push(intervals[i])
      i++
    }
  }
  return result
};

console.log('Should be: [[1,6],[8,10],[15,18]]', merge([[15,18], [2,6], [1,3], [8,10]]))
console.log('Should bee: [[1,5]]', merge([[1,4], [4,5]]))