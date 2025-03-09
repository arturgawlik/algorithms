export function selectionSort<T>(
  array: Array<T>,
  compareCb: (a: T, b: T) => boolean
) {
  const sortedArray = [];

  for (let index = 0; index < array.length; index++) {
    let candidateIndex = 0;
    for (let index = 1; index < array.length; index++) {
      if (compareCb(array[index], array[candidateIndex])) {
        candidateIndex = index;
      }
    }

    sortedArray.push(array[candidateIndex]);
  }

  return sortedArray;
}
