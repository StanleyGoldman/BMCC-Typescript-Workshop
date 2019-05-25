# Sample Console Application

This sample console application does not do much. It requires the arguments it requires and that is pretty much it.

## Working with the Sample Console Application

First run: `npm install`

### Running the Sample Console Application

Run: `node_modules/.bin/ts-node src/index.ts`

It will output the required arguments. Any values can be provided. Nothing will really happen.

### Running the tests

Run: `npm run test`

### Running the tests in watch mode

Run: `npm run test:watch`

### Running the application in watch mode

Run: `npm run start`

### Building the javascript

Run: `npm run build`

## Debugging in Visual Studio Code

1. In Visual Studio Code's menu choose: `View -> Debug`
2. Choose the active debug profile
    - `Launch Program` to debug the application
    - `Mocha All` to debug a unit test
3. In Visual Studio Code, place a breakpoint at the appropriate spot.
4. Hit the Play button in the Debug Window