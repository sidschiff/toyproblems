/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let sum = 0;
  let carry = 0;
  let result = new ListNode(0, null);
  const head = result;

  while (l1 || l2 || carry) {
    let a = l1 ? l1.val : 0;
    let b = l2 ? l2.val : 0;
    let cSum = (a + b + carry);

    carry = Math.floor(cSum / 10);
    sum = cSum % 10;

    result.val = sum;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    (l1 || l2 || carry) ? result.next = new ListNode(0, null) : null;
    result = result.next;
  }

  return head;
};

// Testing
console.log(addTwoNumbers([2,4,3], [5,6,4]))