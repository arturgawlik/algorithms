export function binarySearch<T>(sortedArray: Array<T>, toFound: T) {
  let low = 0;
  let high = sortedArray.length;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = sortedArray[mid];

    if (guess < toFound) {
      low = mid + 1;
    } else if (guess > toFound) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
}
