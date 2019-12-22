/*Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
  let list = new ListNode(0);
  let head = list;

  while (l1 || l2) {
    if (l1 === null) {
      head.next = new ListNode(l2.val);
      l2 = l2.next;
    } else if (l2 === null) {
      head.next = new ListNode(l1.val);
      l1 = l1.next;
    } else if (l1.val <= l2.val) {
      head.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      head.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    head = head.next;
  }

  return list.next;
};
