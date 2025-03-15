import test from "node:test";
import assert from "node:assert";
import { List } from "../list.ts";

test.describe("List", () => {
  test.it("should allow set and get item", () => {
    const list = new List();
    list.push(1);
    list.push(2);
    assert.equal(list.get(1), 2);
  });
});
