import { Request, Response } from "express";

interface ISample {
    id: number;
    name: string;
}

const sampleData: ISample[] = [
    {
        id: 1,
        name: "Sample 1",
    },
    {
        id: 2,
        name: "Sample 2",
    },
    {
        id: 3,
        name: "Sample 3",
    },
];


export interface ISampleService {
    getAll(): ISample[];
    getById(id: number): ISample;
}

export class SampleController {
    constructor(private sampleService: ISampleService) { }

    // Get all students
    public getAllSamples(req: Request, res: Response) {
        return res.status(200).json({
            students: this.sampleService.getAll(),
        });
    }

    // Get a single student
    public getSingleStudent(req: Request, res: Response) {
        const sampleId: string | undefined = req.param("id", undefined);

        // const findStudent = students.find(student => student.id === parseInt(req.params.id, 10));
        // if (findStudent) {
        //     return res.status(200).json({
        //         student: findStudent,
        //         message: "A single student record",
        //     });
        // }
        // return res.status(404).json({
        //     message: "Student record not found",
        // });
    }
}