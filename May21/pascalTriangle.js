var generate = function(numRows) {
  let tri = [[1]]
  for (let i = 1; i < numRows; i++) {
    let row = [1], j = 1
    while (j < i) {
      row.push(tri[i - 1][j - 1] + tri[i - 1][j])
      j++
    }
    row.push(1)
    tri.push(row)
  }
  return tri
};