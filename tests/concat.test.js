import { concat } from "../src/utils/concat";

test("should concatenate two arrays", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  expect(concat(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
});
