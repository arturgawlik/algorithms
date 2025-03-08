import test from "node:test";
import assert from "node:assert";
import { simpleSearch } from "./simple-search.ts";

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
test.describe("Simple Search", () => {
  for (const { sortedArray, numberToFound } of testDataSet) {
    test.it(
      `should pick right index in ${sortedArray.length} length array`,
      () => {
        const foundIndex = simpleSearch(sortedArray, numberToFound);
        assert.equal(sortedArray[foundIndex], numberToFound);
      }
    );
  }
});
