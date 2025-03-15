import test from "node:test";
import assert from "node:assert";
import { binarySearch } from "../binary-search.ts";

const testDataSet = [
  {
    sortedArray: Array.from({ length: 100 }).map((_, index) => index + 1),
    numberToFound: 37,
  },
  {
    sortedArray: Array.from({ length: 12800 }).map((_, index) => index + 1),
    numberToFound: 37,
  },
  {
    sortedArray: Array.from({ length: 256 }).map((_, index) => index + 1),
    numberToFound: 37,
  },
];
test.describe("Binary Search", () => {
  for (const { sortedArray, numberToFound } of testDataSet) {
    test.it(
      `should pick right index in ${sortedArray.length} length array`,
      () => {
        const foundIndex = binarySearch(sortedArray, numberToFound);
        assert.equal(sortedArray[foundIndex], numberToFound);
      }
    );
  }
});
