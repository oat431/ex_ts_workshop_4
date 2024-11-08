import { BaseModel } from '../../../../shared/base.model.js';

export class Comment extends BaseModel {
    private content: string;
    private rate: number;

    constructor(id: number, content: string, rate: number) {
        super(id, new Date(), new Date());
        this.content = content;
        this.rate = rate;
    }

    public getId(): number {
        if (this.id === undefined) {
            throw new Error('ID is undefined');
        }
        return this.id;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public getRate(): number {
        return this.rate;
    }

    public setRate(rate: number): void {
        this.rate = rate;
    }
}
