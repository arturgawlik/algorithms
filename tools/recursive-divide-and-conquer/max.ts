import type { ListItem } from "../../data-structures/list/list.ts";

/**
 * Exercise 4.3
 */
export function max(list: ListItem, currentMax = -Infinity) {
  // base case
  if (!list.hasNext()) {
    return currentMax;
  }

  // recursion case
  const next = list.getNext();
  return max(next, next.getValue() > currentMax ? next.getValue() : currentMax);
}

/**
 * Exercise 4.3
 * Version without additional parameter
 */
export function max2(list: ListItem) {
  // base case
  if (!list.hasNext()) {
    return -Infinity;
  }

  // recursion case
  const val = list.getValue();
  const next = list.getNext();
  const nextRecurVal = max2(next);

  return val > nextRecurVal ? val : nextRecurVal;
}
