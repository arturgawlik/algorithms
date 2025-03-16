export function quickSort<T>(array: T[], compareCb?: (a: T, b: T) => boolean) {
  // base case
  if (array.length < 2) {
    return array;
  }

  // recursive case
  const pivot = array[0];
  const sortedBeforePivot = quickSort(
    array.filter((i) => compareCb(i, pivot)),
    compareCb
  );
  const sortedAfterThanPivot = quickSort(
    array.filter((i) => compareCb(pivot, i)),
    compareCb
  );

  return [...sortedBeforePivot, pivot, ...sortedAfterThanPivot];
}
