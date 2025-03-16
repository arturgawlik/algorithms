/**
 *  Exercise 4.4
 *  Recursive version of binary search algorithm
 */
export function binarySearch(sortedArray: Array<number>, toFound: number) {
  // base case
  if (!sortedArray.length) {
    return undefined;
  }

  // recursive case
  const highIndex = sortedArray.length - 1;
  const midIndex = Math.floor(highIndex / 2);
  const guessValue = sortedArray[midIndex];
  if (guessValue === toFound) {
    return midIndex;
  } else if (guessValue > toFound) {
    // +1 here because we want to remove also last item in array
    const newSortedArray = sortedArray.toSpliced(
      midIndex,
      sortedArray.length - (midIndex + 1)
    );
    const resultIndex = binarySearch(newSortedArray, toFound);
    return resultIndex;
  } else {
    // +1 here because we are not interested in middle element
    const newSortedArray = sortedArray.toSpliced(0, midIndex + 1);
    const resultIndex = binarySearch(newSortedArray, toFound);
    // if we return `undefined` it means that no value was found and
    // is such case we should not add "last" index to `undefined`
    if (resultIndex != undefined) {
      // need to +1 because we removed also +1 (middle - which we are not interested in) element
      return resultIndex + (midIndex + 1);
    }
  }
}
