import { Argv } from "yargs";
import * as yargs from "yargs";

export interface ICommandArguments {
    debug?: boolean;
    accountNumber: number;
    url: string;
}

export const yargsParser: Argv<ICommandArguments> = yargs
    .option("accountNumber", { type: "number", demand: true })
    .option("url", { type: "string", demand: true })
    .option("debug", { type: "boolean", default: false })
    .help();
