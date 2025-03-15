export function selectionSort<T>(
  array: Array<T>,
  compareCb: (a: T, b: T) => boolean
) {
  const sortedArray = [];

  while (array.length) {
    let candidateIndex = 0;
    for (let index = 1; index < array.length; index++) {
      if (compareCb(array[index], array[candidateIndex])) {
        candidateIndex = index;
      }
    }

    sortedArray.push(array[candidateIndex]);
    array.splice(candidateIndex, 1);
  }

  return sortedArray;
}
