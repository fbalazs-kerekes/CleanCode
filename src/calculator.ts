export class Calculator {

    public Add(a: number, b: number): number {
        return a + b;
    }

    public Subtract(a: number, b: number): number {
        return a - b;
    }

    public Multiply(a: number, b: number): number {
        return a * b;
    }

    public Divide(dividend: number, divisor: number): number {
        if (divisor == 0) {
            throw new Error('Division by zero!');
        }
        return dividend / divisor;
    }

    public SquareRoot(radicand: number): number {
        if (radicand < 0) {
            throw Error('The radicand must be non-negative');
        }
        return Math.sqrt(radicand);
    }

    public Power(base: number, exponent: number): number {
        return Math.pow(base, exponent);
    }
}