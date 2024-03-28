import { Calculator } from "../src/calculator";

describe("Calculator tests", () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    })

    describe("Addition tests", () => {

        test('Given I have 2 non-negative numbers, When I add them together, Then the sum of the two numbers is returned', () => {
            // Arrange
            const a = 5;
            const b = 3;
            const expected = 8; // a+b

            // Act
            const result = calculator.Add(a, b);

            // Assert
            expect(result).toBe(expected);
        })

        test('Given I have 2 negative numbers, When I add them together, Then the sum of the two numbers is returned', () => {
            const a = -5;
            const b = -3;
            const expected = -8; // a+b

            const result = calculator.Add(a, b);

            expect(result).toBe(expected);
        })

        test('Given I have 2 numbers, one of them zero, When I add them together, Then the sum of the two numbers is returned', () => {
            const a = 0;
            const b = 3;
            const expected = 3; // a+b

            const result = calculator.Add(a, b);

            expect(result).toBe(expected);
        })

        test('Given I have 2 floating-point numbers, When I add them together, Then the sum of the two numbers is returned', () => {
            const a = 1.9;
            const b = 3.5;
            const expected = 5.4; // a+b

            const result = calculator.Add(a, b);

            expect(result).toBe(expected);
        })

        test('Given I have 2 numbers, When I add them together use commutative property, Then the result of the two additions are equal', () => {
            const a = 9;
            const b = 1;

            const resultAbBa = (calculator.Add(a, b) === calculator.Add(b, a)); //a+b === b+a

            expect(resultAbBa).toBeTruthy();
        })
    });

    describe("Subtracion tests", () => {

        test('Given I have 2 non-negative numbers, When I substract from each other, Then the difference of the two numbers is returned', () => {
            // Arrange
            const a = 5;
            const b = 3;
            const expected = 2; // a-b

            // Act
            const result = calculator.Subtract(a, b);

            // Assert
            expect(result).toBe(expected);
        })

        test('Given I have 2 negative numbers, When I substract from each other, Then the difference of the two numbers is returned', () => {
            // Arrange
            const a = -5;
            const b = -3;
            const expected = -2; // a-b

            // Act
            const result = calculator.Subtract(a, b);

            // Assert
            expect(result).toBe(expected);
        })

        test('Given I have 2 floating-point numbers, When I substract from each other, Then the difference of the two numbers is returned', () => {
            // Arrange
            const a = 3.1;
            const b = 2.1;
            const expected = 1.0; // a-b

            // Act
            const result = calculator.Subtract(a, b);

            // Assert
            expect(result).toBe(expected);
        })


        test('Given I have 2 numbers (a,b) and "a" less than "b", When I substract from each other, Then the difference of the two numbers is returned', () => {
            // Arrange
            const a = 2;
            const b = 5;
            const expected = -3; // a-b

            // Act
            const result = calculator.Subtract(a, b);

            // Assert
            expect(result).toBe(expected);
        })

        test('Given I have 2 numbers (a,b) and "b" less than "a", When I substract from each other, Then the difference of the two numbers is returned', () => {
            // Arrange
            const a = 5;
            const b = 4;
            const expected = 1; // a-b

            // Act
            const result = calculator.Subtract(a, b);

            // Assert
            expect(result).toBe(expected);
        })
    });

    describe("Multiplication tests", () => {

        test('Given I have 2 non-negative numbers, When I multiply them together, Then the product of the two numbers is returned', () => {
            const a = 4;
            const b = 3;
            const expected = 12; // a*b

            const result = calculator.Multiply(a, b);

            expect(result).toBe(expected);
        })

        test('Given I have 2 negative numbers, When I multiply them together, Then the product of the two numbers is returned', () => {
            const a = -3;
            const b = -3;
            const expected = 9; // a*b

            const result = calculator.Multiply(a, b);

            expect(result).toBe(expected);
        })

        test('Given I have 2 numbers and one of them zero, When I multiply them together, Then the product of the two numbers returned zero', () => {
            const a = 3;
            const b = 0;
            const expected = 0; // a*0

            const result = calculator.Multiply(a, b);

            expect(result).toBe(expected);
        })

        test('Given I have 2 floatig-point numbers, When I multiply them together, Then the product of the two numbers returned', () => {
            const a = 10.0;
            const b = 0.5;
            const expected = 5.0; // a*b

            const result = calculator.Multiply(a, b);

            expect(result).toBe(expected);
        })

        test('Given I have 2 numbers, When I multiply them together using the commutative property, Then the result of the two multiplication are equal', () => {
            const a = 2;
            const b = 5;

            const resultAbBa = (calculator.Multiply(a, b) === calculator.Multiply(b, a)); //a*b === b*a

            expect(resultAbBa).toBeTruthy();
        })
    });


    describe("Divison tests", () => {

        test('Given I have 2 non-negative numbers, When I divide them together, Then the quotient of the two numbers is returned', () => {
            const a = 8;
            const b = 4;
            const expected = 2; // a/b

            const result = calculator.Divide(a, b);

            expect(result).toBe(expected);
        })

        test('Given I have 2 negative numbers, When I divide them together, Then the quotient of the two numbers is returned', () => {
            const a = -12;
            const b = -3;
            const expected = 4; // a/b

            const result = calculator.Divide(a, b);

            expect(result).toBe(expected);
        })

        test('Given I have 2 numbers and one of then zero, When I divide zero of non-zero number, Then the quotient of the two numbers is returned zero', () => {
            const a = 0;
            const b = 7;
            const expected = 0; // a/b

            const result = calculator.Divide(a, b);

            expect(result).toBe(expected);
        })

        test('Given I have 2 floating-point numbers, When I divide them together, Then the quotient of the two numbers is returned', () => {
            const a = 8.0;
            const b = 0.5;
            const expected = 16; // a/b

            const result = calculator.Divide(a, b);

            expect(result).toBe(expected);
        })

        test('Given I have 2 numbers and the divider is zero, When I divide them together, Then the division throw an error', () => {
            const a = 7;
            const b = 0;

            expect(() => calculator.Divide(a, b)).toThrow(Error)
        })
    });

    describe("Square root tests", () => {

        test('Given I have a non-negative number, When I calculate square root of number, Then the square root of the number returned', () => {
            const a = 16;
            const expected = 4; // sqrt(a)

            const result = calculator.SquareRoot(a);

            expect(result).toBe(expected);
        })
        
        test('Given I have a number what is zero, When I calculate square root of number, Then the square root of the number returned', () => {
            const a = 0;
            const expected = 0; // sqrt(a)

            const result = calculator.SquareRoot(a);

            expect(result).toBe(expected);
        })

        test('Given I have a negative number, When I calculate square root of number, Then the square root calculating throws an error', () => {
            const a = -8;
     
            expect(() => calculator.SquareRoot(a)).toThrow(Error)
        })
    });


    describe("Power tests", () => {

        test('Given I have two non-negative number, When I powering two numbers, Then the power of the two number returned', () => {
            const base = 2;
            const exponent = 4;
            const expected = 16; // a^b

            const result = calculator.Power(base, exponent);

            expect(result).toBe(expected);
        })

        test('Given I have two negative number, When I exponentiate two numbers, Then the power of the two numbers returned', () => {
            const base = -2;
            const exponent = -4;
            const expected = 0.0625; // a^b

            const result = calculator.Power(base, exponent);

            expect(result).toBe(expected);
        })

        
        test('Given I have two numbers one of them zero, When I exponentiate non-zero number with zero number, Then the power of the two numbers returned', () => {
            const base = 3;
            const exponent = 0;
            const expected = 1; // a^b

            const result = calculator.Power(base, exponent);

            expect(result).toBe(expected);
        })

        
        test('Given I have two numbers one of them zero, When I exponentiate zero number with non-zero number, Then the power of the two numbers returned', () => {
            const base = 0;
            const exponent = 4;
            const expected = 0; // a^b

            const result = calculator.Power(base, exponent);

            expect(result).toBe(expected);
        })

        test('Given I have two floating-point numbers, When I exponentiate two numbers, Then the power of the two numbers returned', () => {
            const base = 16.0;
            const exponent = 0.5;
            const expected = 4.0; // a^b

            const result = calculator.Power(base, exponent);

            expect(result).toBe(expected);
        })

        test('Given I have two numbers one of them Number.MAX_VALUE, When I exponentiate two numbers, Then the power of the two numbers returned Infinity', () => {
            const base = Number.MAX_VALUE;
            const exponent = 2;
            const expected = Infinity; // a^b

            const result = calculator.Power(base, exponent);

            expect(result).toBe(expected);
        })
    });

})
