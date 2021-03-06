import "mocha";

import { expect } from "chai";

import { commandProcesor } from "./processor";

describe("Command Parser", () => {
  it("should process a command", () => {
    const output = commandProcesor({ accountNumber: 12345, url: "http://google.com"});
    expect(output).to.be.equal(12345);
  });
});