import * as yargs from "yargs";

// tslint:disable-next-line:typedef
const args =  yargs
  .scriptName("pirate-parser")
  .usage("$0 <cmd> [args]")
  .command("hello [name]", "welcome ter yargs!", (builder) => {
    return yargs.positional("name", {
      type: "string",
      default: "Cambi",
      describe: "the name to say hello to"
    });
  }, (argv) => {
    console.log("hello", argv.name, "welcome to yargs!");
  })
  .help()
  .argv;