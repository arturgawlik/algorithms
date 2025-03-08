import test from "node:test";
import assert from "node:assert";
import { Array } from "./array.ts";

test.it("should allow set and get item", () => {
  const array = new Array(2);
  array.set(0, 1);
  array.set(1, 2);
  assert.equal(array.get(1), 2);
});
