export function sum(arr: number[]) {
  // base case
  if (!arr.length) {
    return 0;
  }
  // recursive case
  const [next, ...rest] = arr;
  return next + sum(rest);
}
