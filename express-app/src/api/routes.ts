import { Router } from "express";

import * as StudentController from "../controllers/sampleController";

const routes = Router();

routes.get("/", StudentController.getAllStudents);
routes.get("/:id", StudentController.getSingleStudent);

export default routes;