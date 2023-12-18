export class ApplicationError extends Error {
    private code: number;
    constructor(code: number, message: string) {
        super(message);
        this.code = code;
    
        // Captura la pila de rastreo, pero incluye el constructor actual
        // Esto significa que la pila de rastreo comenzará desde este constructor
        Error.captureStackTrace(this, this.constructor);
      }
}