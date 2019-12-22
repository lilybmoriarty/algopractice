/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

let reverseList = function(head) {
  if (!head) return head;

  let current = head;
  let temp, prev;

  while (current) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};
