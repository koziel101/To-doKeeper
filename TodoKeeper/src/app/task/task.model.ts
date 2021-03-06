export class Task {
    public description: string;
    public isDone: boolean;

    constructor(description: string) {
        this.description = description;
    }

    public getDescription() {
        return this.description;
    }

    public setDescription(description: string) {
        this.description = description;
    }
}