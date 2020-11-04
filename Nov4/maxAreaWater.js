/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49. (8, 7)
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = -Infinity
  for (let j = height.length - 1; j > 0; j--) {
    let i = 0, k = j
    while (k < height.length) {
      max = Math.max(max, getArea(height[i], height[k], k - i))
      i++, k++
    }
  }
  return max
};

let getArea = (heightA, heightB, width) => {
  let height = Math.min(heightA, heightB)
  return height * width
}

// Testing
console.log(maxArea([1,8,6,2,5,4,8,3,7]))