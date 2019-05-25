import { Arguments } from "yargs";

import { ICommandArguments, yargsParser } from "./argparser";
import { commandProcesor } from "./processor";

const commandArgs: Arguments<ICommandArguments> = yargsParser.argv;
commandProcesor(commandArgs);