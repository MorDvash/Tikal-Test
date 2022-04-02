export class CustomError extends Error {
  constructor(public httpCode: number, public description: string) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }

  serializeErrors() {
    return { description: this.description, httpCode: this.httpCode };
  }
}
