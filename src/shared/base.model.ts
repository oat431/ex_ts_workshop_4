export abstract class BaseModel {
    protected id?: number;
    protected createdAt?: Date;
    protected updatedAt?: Date;

    constructor(id?: number, createdAt?: Date, updatedAt?: Date) {
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public abstract getId(): number;
}
