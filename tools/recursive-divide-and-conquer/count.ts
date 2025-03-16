import type { ListItem } from "../../data-structures/list/list.ts";

/**
 * Exercise 4.2
 */
export function count(list: ListItem) {
  // base case
  if (!list.hasNext()) {
    return 0;
  }
  // recursive case
  return 1 + count(list.getNext());
}
