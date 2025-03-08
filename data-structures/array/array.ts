const kChunkSize = 10;

export class Array {
  #array: Int32Array;
  #size = 0;

  constructor(size: number) {
    this.#size = size;
    this.#array = new Int32Array(this.#size);
  }

  set(index: number, elem: number) {
    this.#assetInBound(index);
    return (this.#array[index] = elem);
  }

  get(index: number) {
    this.#assetInBound(index);
    return this.#array[index];
  }

  #assetInBound(index: number) {
    if (index > this.#size - 1) {
      throw new Error("Out of bound!");
    }
  }
}
