export function quickSort<T>(array: T[], compareCb: (a: T, b: T) => boolean) {
  // BASE CASE
  if (array.length < 2) {
    return array;
  }

  // RECURSIVE CASE
  // picking pivot from the middle is more optimal for cases when e.g. input array is already sorted
  // const pivot = array[Math.round(array.length / 2)];
  // picking pivot as random is most optimal in average for quick-sort
  const pivot = array[random(0, array.length - 1)];
  const { predicantPass: beforePivot, predicantFail: afterPivot } =
    array.filterWithRest((i) => compareCb(i, pivot));

  return [
    ...quickSort(beforePivot, compareCb),
    pivot,
    ...quickSort(afterPivot, compareCb),
  ];
}

/**
 * Enables iterating through array only one time and get new array that pass predicant and also not.
 */
Array.prototype.filterWithRest = function <T>(predicant: (item: T) => boolean) {
  const predicantPass = [];
  const predicantFail = [];
  for (const item of this) {
    if (predicant(item)) {
      predicantPass.push(item);
    } else {
      predicantFail.push(item);
    }
  }

  return { predicantPass, predicantFail };
};

function random(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

declare global {
  interface Array<T> {
    filterWithRest<T>(predicant: (item: T) => boolean): {
      predicantPass: Array<T>;
      predicantFail: Array<T>;
    };
  }
}
