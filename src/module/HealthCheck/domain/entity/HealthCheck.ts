export class HealthCheck {
    private status: boolean;
    private message!: string;

    constructor(status: boolean, message: string) {
        this.message = message;
        this.status = status;
    }

    getStatus(): boolean {
        return this.status;
    }

    setStatus(status: boolean): void {
        this.status = status;
    }

    getMessage(): string {
        return this.message;
    }

    setMessage(message: string): void {
        this.message = message;
    }
}
