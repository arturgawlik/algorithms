import test from "node:test";
import assert from "node:assert";
import { ListItem } from "../../../data-structures/list/list.ts";
import { count } from "../count.ts";

test.describe("count", () => {
  const testCases = [
    {
      listItem: Array.from({ length: 100 })
        .map((_, i) => i + 1)
        .reduce((prev: ListItem, curr) => {
          const newListItem = new ListItem(curr);
          newListItem.setNext(prev);
          return newListItem;
        }, new ListItem(0)),
      res: 100,
    },
  ];

  for (const testCase of testCases) {
    test.it(`should sum array to ${testCase.res}`, () => {
      assert.equal(count(testCase.listItem), testCase.res);
    });
  }
});
