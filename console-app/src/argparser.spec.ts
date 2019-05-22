import "mocha";

import { expect } from "chai";
import { stderr, stdout } from "test-console";

import { yargsParser } from "./argparser";

const testParser = yargsParser.exitProcess(false);

const formatHelpOutput = (input: string[]) => input.join("\n") + "\n";

describe("Argument Parser", () => {
  afterEach(() => {
    testParser.reset();
  });

  it("should parse empty arguments", () => {
    const outInspect = stdout.inspect();
    const errInspect = stderr.inspect();

    const error = expect(() => {
      testParser.parse([]);
    }).to.throw();

    outInspect.restore();
    errInspect.restore();

    const expectedHelpOutput = formatHelpOutput([
      "Options:\n" +
      "  --version        Show version number                                 [boolean]",
      "  --accountNumber                                            [number] [required]",
      "  --url                                                      [string] [required]",
      "  --debug                                             [boolean] [default: false]",
      "  --help           Show help                                           [boolean]",
      ",",
      ",Missing required arguments: accountNumber, url"]);

    expect(outInspect.output.join()).to.be.equal("", "Standard output stream should match");
    expect(errInspect.output.join()).to.be.equal(expectedHelpOutput, "Error output stream should match");
  });

  it("should parse help", () => {
    const outInspect = stdout.inspect();
    const errInspect = stderr.inspect();

    testParser.parse(["--help"]);

    outInspect.restore();
    errInspect.restore();

    const expectedHelpOutput = formatHelpOutput([
      "Options:\n" +
      "  --version        Show version number                                 [boolean]",
      "  --accountNumber                                            [number] [required]",
      "  --url                                                      [string] [required]",
      "  --debug                                             [boolean] [default: false]",
      "  --help           Show help                                           [boolean]"]);

    expect(outInspect.output.join()).to.be.equal(expectedHelpOutput, "Standard output stream should match");
    expect(errInspect.output.join()).to.be.equal("", "Error output stream should match");
  });

  it("should parse required arguments", () => {
    const outInspect = stdout.inspect();
    const errInspect = stderr.inspect();

    const commandArguments = testParser.parse(["--accountNumber", "12345", "--url", "http://google.com"]);

    outInspect.restore();
    errInspect.restore();

    expect(commandArguments.accountNumber).to.be.equal(12345);
    expect(commandArguments.url).to.be.equal("http://google.com");
    expect(commandArguments.debug).to.be.false;

    expect(outInspect.output.join()).to.be.equal("", "Standard output stream should match");
    expect(errInspect.output.join()).to.be.equal("", "Error output stream should match");
  });

  it("should parse all arguments", () => {
    const outInspect = stdout.inspect();
    const errInspect = stderr.inspect();

    const commandArguments = testParser.parse(["--accountNumber", "12345", "--url", "http://google.com", "--debug"]);

    outInspect.restore();
    errInspect.restore();

    expect(commandArguments.accountNumber).to.be.equal(12345);
    expect(commandArguments.url).to.be.equal("http://google.com");
    expect(commandArguments.debug).to.be.true;

    expect(outInspect.output.join()).to.be.equal("", "Standard output stream should match");
    expect(errInspect.output.join()).to.be.equal("", "Error output stream should match");
  });
});
