import test from "node:test";
import assert from "node:assert";
import { selectionSort } from "../selection-sort.ts";

test.describe("Selection Sort", () => {
  test.it("should sort desc", () => {
    const array = [8, 21, 18];
    const sortedArray = selectionSort(array, (a, b) => a > b);
    assert.deepStrictEqual(sortedArray, [21, 18, 8]);
  });

  test.it("should sort asc", () => {
    const array = [8, 21, 18];
    const sortedArray = selectionSort(array, (a, b) => a < b);
    assert.deepStrictEqual(sortedArray, [8, 18, 21]);
  });
});
