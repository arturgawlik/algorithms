export function sum(arr: number[]) {
  if (arr.length) {
    const [next, ...rest] = arr;
    return next + sum(rest);
  } else {
    return 0;
  }
}
