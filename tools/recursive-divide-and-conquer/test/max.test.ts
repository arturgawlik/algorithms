import test from "node:test";
import assert from "node:assert";
import { ListItem } from "../../../data-structures/list/list.ts";
import { count } from "../count.ts";
import { max, max2 } from "../max.ts";

test.describe("max", () => {
  const list1 = new ListItem(-23);
  const list2 = new ListItem(3214);
  const list3 = new ListItem(24);
  const list4 = new ListItem(43);
  const list5 = new ListItem(322);
  list1.setNext(list2);
  list2.setNext(list3);
  list3.setNext(list4);
  list4.setNext(list5);

  const testCases = [
    {
      listItem: list1,
      res: 3214,
    },
  ];

  for (const testCase of testCases) {
    test.it(`should sum array to ${testCase.res}`, () => {
      assert.equal(max2(testCase.listItem), testCase.res);
    });
  }
});
