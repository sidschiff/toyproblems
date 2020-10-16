/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.storage = []
  this.size = 0
  this.min = Infinity
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.storage[this.size] = x
  if (x < this.min) {
    this.min = x
  }
  this.size++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.size--
  if (this.storage[this.size] === this.min) {
    this.min = Infinity
  }
  delete this.storage[this.size]
  for (let i = 0; i < this.storage.length; i++) {
    if (this.storage[i] < this.min) {
      this.min = this.storage[i]
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.storage[this.size - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */