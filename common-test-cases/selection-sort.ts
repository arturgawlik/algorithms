import test from "node:test";
import assert from "node:assert";

export function generateSortTestForImpl(
  testSuiteName: string,
  sortImpl: (
    arrayToSort: number[],
    compareCb: (a: number, b: number) => boolean
  ) => number[]
) {
  test.describe(testSuiteName, () => {
    test.it("should sort desc", () => {
      const array = [8, 21, 18];
      const sortedArray = sortImpl(array, (a, b) => a > b);
      assert.deepStrictEqual(sortedArray, [21, 18, 8]);
    });

    test.it("should sort asc", () => {
      const array = [8, 21, 18];
      const sortedArray = sortImpl(array, (a, b) => a < b);
      assert.deepStrictEqual(sortedArray, [8, 18, 21]);
    });
  });
}
