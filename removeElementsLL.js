/*
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
*/

let removeElements = function(head, val) {
  if (!head) return head;

  let current = head;
  let prev = null;
  while (current) {
    if (current.val === val) {
      if (prev === null) {
        head = current.next;
        current = current.next;
      } else {
        prev.next = current.next;
        current.next = null;
        current = prev.next;
      }
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
};
