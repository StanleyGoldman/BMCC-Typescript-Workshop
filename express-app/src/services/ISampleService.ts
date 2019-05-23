import { ISample } from "./ISample";

export interface ISampleService {
    getAll(): ISample[];
    getById(id: number): ISample;
}