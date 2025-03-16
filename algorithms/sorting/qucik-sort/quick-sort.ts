export function quickSort<T>(array: T[], compareCb: (a: T, b: T) => boolean) {
  // base case
  if (array.length < 2) {
    return array;
  }

  // recursive case
  const pivot = array[0];
  const beforePivot = array.filter((i) => compareCb(i, pivot));
  const afterThanPivot = array.filter((i) => compareCb(pivot, i));

  return [
    ...quickSort(beforePivot, compareCb),
    pivot,
    ...quickSort(afterThanPivot, compareCb),
  ];
}
