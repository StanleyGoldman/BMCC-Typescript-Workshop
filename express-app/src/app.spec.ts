import "mocha";

import * as chai from "chai";
import chaiHttp = require("chai-http");

import app from "./app";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Hello API Request", () => {
    it("should return response on call", () => {
        return chai.request(app).get("/hello")
            .then((res) => {
                chai.expect(res.text).to.eql("how's it going?");
            });
    });
});