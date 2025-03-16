import test from "node:test";
import assert from "node:assert";

export function generateTestForImpl(
  testSuiteName: string,
  binarySearchImpl: (
    sortedArray: number[],
    expected: number
  ) => number | undefined
) {
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
    {
      sortedArray: Array.from({ length: 256 }).map((_, index) => index + 1),
      numberToFound: 32132132131231,
      indexToFound: undefined,
    },
  ];
  test.describe(testSuiteName, () => {
    for (const testData of testDataSet) {
      const { sortedArray, numberToFound, indexToFound } = testData;
      const hasIndexToFound = Object.hasOwn(testData, "indexToFound");
      test.it(
        `should pick right index in ${sortedArray.length} length array`,
        () => {
          const foundIndex = binarySearchImpl(sortedArray, numberToFound);
          let expected = numberToFound;
          if (hasIndexToFound) {
            expected = indexToFound;
          }
          assert.equal(sortedArray[foundIndex], expected);
        }
      );
    }
  });
}
