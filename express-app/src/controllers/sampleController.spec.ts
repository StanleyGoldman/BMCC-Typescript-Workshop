import "mocha";

import * as chai from "chai";
import { expect } from "chai";
import * as express from "express";
import { Application, Response } from "express";
import * as sinon from "sinon";

import { SampleService } from "../services/SampleService";
import { SampleController } from "./sampleController";

import chaiHttp = require("chai-http");
import sinonChai = require("sinon-chai");

// tslint:disable:no-var-requires
chai.use(chaiHttp);
chai.use(sinonChai);
// tslint:enable:no-var-requires

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

const app: Application = express();
const server = app.listen(getRandomInt(23000));

const fakeSampleService = sinon.createStubInstance(SampleService);
app.use("/api", SampleController(fakeSampleService));

describe("Sample Controller", () => {
    after(() => {
        server.close();
    });

    it("should return all", async () => {
        fakeSampleService.getAll.reset();

        const sampleData = [{ id: 1, name: "Test Sample 1" }];
        fakeSampleService.getAll.returns(sampleData);

        const res = await chai.request(app).get("/api");
        expect(res.body).to.deep.equal({ students: sampleData });
    });

    it("should return single", async () => {
        fakeSampleService.getById.reset();

        const sampleData = { id: 1, name: "Test Object 1" };
        fakeSampleService.getById.withArgs(1).returns(sampleData);

        const res = await chai.request(app).get("/api/1");
        expect(res.body).to.deep.equal({ student: sampleData });
    });

    it("should return single missing", async () => {
        fakeSampleService.getById.reset();

        const res = await chai.request(app).get("/api/1");
        expect(res.body).to.deep.equal({
            message: "Student record not found",
        });
    });
});