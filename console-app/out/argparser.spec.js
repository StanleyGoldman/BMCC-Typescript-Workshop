"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var test_console_1 = require("test-console");
var argparser_1 = require("./argparser");
var testParser = argparser_1.yargsParser.exitProcess(false);
describe("Argument Parser", function () {
    it("should parse empty arguments", function () {
        var outInspect = test_console_1.stdout.inspect();
        var errInspect = test_console_1.stderr.inspect();
        var error = chai_1.expect(function () {
            testParser.parse([]);
        }).to.throw();
        outInspect.restore();
        errInspect.restore();
        chai_1.expect(outInspect.output, "").to.be.empty;
    });
});
//# sourceMappingURL=argparser.spec.js.map