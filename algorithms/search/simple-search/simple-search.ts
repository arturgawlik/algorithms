export function simpleSearch<T>(array: Array<T>, toFound: T) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === toFound) {
      return index;
    }
  }
}
