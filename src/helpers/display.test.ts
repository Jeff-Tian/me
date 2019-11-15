import assert = require("assert");
import { pp } from "./display-ts";

describe("helpers", () => {
  test("can display", () => {
    const product = {
      minimumCreditLimitAmount: "800",
      a: "A",
      aa: "AA"
    };

    assert.deepStrictEqual(pp("a")(product), "a: A");

    assert.deepStrictEqual(
      pp("minimumCreditLimitAmount")(product),
      "minimumCreditLimitAmount: 800"
    );
  });
});
