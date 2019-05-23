import { ISample } from "./ISample";
import { ISampleService } from "./ISampleService";

export class SampleService implements ISampleService {
    public getAll(): ISample[] {
        return [
            {
                id: 1,
                name: "Sample 1",
            },
            {
                id: 2,
                name: "Sample 2",
            },
        ];
    }

    public getById(id: number): ISample {
        if (id === 1) {
            return {
                id: 1,
                name: "Sample 1",
            };
        }

        return null;
    }
}