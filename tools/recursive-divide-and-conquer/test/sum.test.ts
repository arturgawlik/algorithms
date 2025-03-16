import test from "node:test";
import assert from "node:assert";
import { sum } from "../sum.ts";

test.describe("sum", () => {
  const testCases = [
    {
      arr: [1, 2],
      res: 3,
    },
    {
      arr: Array.from({ length: 100 }).map((_, i) => i),
      res: Array.from({ length: 100 })
        .map((_, i) => i)
        .reduce((prev, curr) => prev + curr, 0),
    },
  ];

  for (const testCase of testCases) {
    test.it(`should sum array to ${testCase.res}`, () => {
      assert.equal(sum(testCase.arr), testCase.res);
    });
  }
});
