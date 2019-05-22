"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
exports.yargsParser = yargs
    .option("accountNumber", { type: "number", demand: true })
    .option("url", { type: "string", demand: true })
    .option("debug", { type: "boolean" })
    .help();
//# sourceMappingURL=argparser.js.map