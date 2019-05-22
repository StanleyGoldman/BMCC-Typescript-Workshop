import { Arguments } from "yargs";

import { ICommandArguments, yargsParser } from "./argparser";

const commandArgs: Arguments<ICommandArguments> = yargsParser.argv;
