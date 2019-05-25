import { Request, Response, Router } from "express";
import { ISampleService } from "../services/ISampleService";

export function SampleController(sampleService: ISampleService): Router {
    const routes = Router();

    routes.get("/", (req: Request, res: Response) => {
        return res.status(200).json({
            students: sampleService.getAll(),
        });
    });

    routes.get("/:id", (req: Request, res: Response) => {
        const sampleId: string | undefined = req.params.id;
        const sampleIdNumber: number | undefined = sampleId ? parseInt(sampleId, 0) : undefined;
        const student = sampleIdNumber ? sampleService.getById(sampleIdNumber) : undefined;

        if (student) {
            return res.status(200).json({
                student,
            });
        }

        return res.status(404).json({
            message: "Sample record not found",
        });
    });

    return routes;
}