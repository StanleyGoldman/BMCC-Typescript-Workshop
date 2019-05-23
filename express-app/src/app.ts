import { Application, Request, Response } from "express";
import * as express from "express";
import { SampleController } from "./controllers/sampleController";
import { SampleService } from "./services/SampleService";

const app: Application = express();

app.use("/api", SampleController(new SampleService()));

const server = app.listen(3000, () => {
    console.log("App listening on port 3000!");
});

export function stop() {
    server.close();
}

export default app;