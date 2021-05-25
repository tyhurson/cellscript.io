import { returns1 } from "../index";

describe("returns1", function () {
  test("returns 1", function () {
    expect(returns1()).toStrictEqual(2);
  });
});
