import { test, expect, describe } from "vitest";

describe("checkDniLength(dni)", () => {
    test("checkDniLength() to be defined", () => {
        expect(checkDniLength).toBeDefined();
    }),
    test("checkDniLength(123456789T) should return error, dni too long", () => {
        const dni = "123456789T";
        const expectedResult = "Dni too long";

        let lengthValidationResult = checkDniLength(dni);

        expect(lengthValidationResult).toBe(expectedResult);
    }),
    test("checkDniLength(1234567T) should return error, dni too short", () => {
        const dni = "1234567T";
        const expectedResult = "Dni too short";

        let lengthValidationResult = checkDniLength(dni);

        expect(lengthValidationResult).toBe(expectedResult);
    }),
    test("checkDniLength(12345678T) should return, valid dni length", () => {
        const dni = "12345678T";
        const expectedResult = "Valid dni length";

        let lengthValidationResult = checkDniLength(dni);

        expect(lengthValidationResult).toBe(expectedResult);
    })
})

describe("validDniComposition(dni)", () => {
    test("validDniComposition() to be defined", () => {
        expect(validDniComposition).toBeDefined();
    }),
    test("validDniComposition(123456789) should return error, the last char is a number", () => {
        const dni = "123456789";
        const expectedResult = false;

        let compositionValidationResult = validDniComposition(dni);

        expect(compositionValidationResult).toBe(expectedResult);
    }),
    test("validDniComposition(FFFFFFFFT) should return error, one of the first 8 chars is not a number", () => {
        const dni = "FFFFFFFFT";
        const expectedResult = false;

        let compositionValidationResult = validDniComposition(dni);

        expect(compositionValidationResult).toBe(expectedResult);
    }),
    test("validDniComposition(1FFFFFFFT) should return error, one of the first 8 chars is not a number", () => {
        const dni = "1FFFFFFFT";
        const expectedResult = false;

        let compositionValidationResult = validDniComposition(dni);

        expect(compositionValidationResult).toBe(expectedResult);
    }),
    test("validDniComposition(12FFFFFFT) should return error, one of the first 8 chars is not a number", () => {
        const dni = "12FFFFFFT";
        const expectedResult = false;

        let compositionValidationResult = validDniComposition(dni);

        expect(compositionValidationResult).toBe(expectedResult);
    }),
    test("validDniComposition(123FFFFFT) should return error, one of the first 8 chars is not a number", () => {
        const dni = "123FFFFFT";
        const expectedResult = false;

        let compositionValidationResult = validDniComposition(dni);

        expect(compositionValidationResult).toBe(expectedResult);
    }),
    test("validDniComposition(1234FFFFT) should return error, one of the first 8 chars is not a number", () => {
        const dni = "1234FFFFT";
        const expectedResult = false;

        let compositionValidationResult = validDniComposition(dni);

        expect(compositionValidationResult).toBe(expectedResult);
    }),
    test("validDniComposition(12345FFFT) should return error, one of the first 8 chars is not a number", () => {
        const dni = "12345FFFT";
        const expectedResult = false;

        let compositionValidationResult = validDniComposition(dni);

        expect(compositionValidationResult).toBe(expectedResult);
    }),
    test("validDniComposition(123456FFT) should return error, one of the first 8 chars is not a number", () => {
        const dni = "123456FFT";
        const expectedResult = false;

        let compositionValidationResult = validDniComposition(dni);

        expect(compositionValidationResult).toBe(expectedResult);
    }),
    test("validDniComposition(1234567FT) should return error, one of the first 8 chars is not a number", () => {
        const dni = "1234567FT";
        const expectedResult = false;

        let compositionValidationResult = validDniComposition(dni);

        expect(compositionValidationResult).toBe(expectedResult);
    }),
    test("validDniComposition(12345678T) should return error, one of the first 8 chars is not a number", () => {
        const dni = "12345678T";
        const expectedResult = true;

        let compositionValidationResult = validDniComposition(dni);

        expect(compositionValidationResult).toBe(expectedResult);
    })
})

describe("validDniLetter(dni)", () => {
    test("validDniLetter() to be defined", () => {
        expect(validDniLetter).toBeDefined();
    }),
    test("validDniLetter(12345678U) should return error, letter exception found", () => {
        const dni = "12345678U";
        const expectedResult = false;

        let letterValidationResult = validDniLetter(dni);

        expect(letterValidationResult).toBe(expectedResult);
    }),
    test("validDniLetter(12345678I) should return error, letter exception found", () => {
        const dni = "12345678I";
        const expectedResult = false;

        let letterValidationResult = validDniLetter(dni);

        expect(letterValidationResult).toBe(expectedResult);
    }),
    test("validDniLetter(12345678O) should return error, letter exception found", () => {
        const dni = "12345678O";
        const expectedResult = false;

        let letterValidationResult = validDniLetter(dni);

        expect(letterValidationResult).toBe(expectedResult);
    }),
    test("validDniLetter(12345678Ñ) should return error, letter exception found", () => {
        const dni = "12345678Ñ";
        const expectedResult = false;

        let letterValidationResult = validDniLetter(dni);

        expect(letterValidationResult).toBe(expectedResult);
    }),
    test("validDniLetter(12345678T) should return error, letter exception found", () => {
        const dni = "12345678T";
        const expectedResult = true;

        let letterValidationResult = validDniLetter(dni);

        expect(letterValidationResult).toBe(expectedResult);
    })
})

describe("checkIndicatedLetter(dni)", () => {
    test("checkIndicatedLetter() to be defined", () => {
        expect(checkIndicatedLetter).toBeDefined();
    }),
    test("checkInicatedLetter(12345678T)", () => {
        const dni = "12345678T";
        const expectedResult = false;

        let letterCheckResult = checkInicatedLetter(dni);

        expect(letterCheckResult).toBe(expectedResult);
    }),
    test("checkInicatedLetter(12345678Z)", () => {
        const dni = "12345678Z";
        const expectedResult = true;

        let letterCheckResult = checkInicatedLetter(dni);

        expect(letterCheckResult).toBe(expectedResult);
    }),
    test("checkInicatedLetter(87654321S)", () => {
        const dni = "87654321S";
        const expectedResult = false;

        let letterCheckResult = checkInicatedLetter(dni);

        expect(letterCheckResult).toBe(expectedResult);
    }),
    test("checkInicatedLetter(87654321X)", () => {
        const dni = "87654321X";
        const expectedResult = true;

        let letterCheckResult = checkInicatedLetter(dni);

        expect(letterCheckResult).toBe(expectedResult);
    })
})

describe("isNie(dni)", () => {
    test("isNie() to be defined", () => {
        expect(isNie).toBeDefined();
    }),
    test("isNie(12345678Z) should return false", () => {
        const dni = "12345678Z";
        const expectedResult = false;

        let nieValidationResult = isNie(dni);

        expect(nieValidationResult).toBe(expectedResult);
    }),
    test("isNie(X2345678Z) should return true", () => {
        const dni = "X2345678Z";
        const expectedResult = true;

        let nieValidationResult = isNie(dni);

        expect(nieValidationResult).toBe(expectedResult);
    }),
    test("isNie(Y2345678Z) should return true", () => {
        const dni = "Y2345678Z";
        const expectedResult = true;

        let nieValidationResult = isNie(dni);

        expect(nieValidationResult).toBe(expectedResult);
    }),
    test("isNie(Z2345678Z) should return true", () => {
        const dni = "Z2345678Z";
        const expectedResult = true;

        let nieValidationResult = isNie(dni);

        expect(nieValidationResult).toBe(expectedResult);
    })
})

describe("replaceToNie()", () => {
    test("replaceToNie() to be defined", () => {
        expect(replaceToNie).toBeDefined();
    }),
    test("replaceToNie(Z2345678Z)", () => {
        const dni = "Z2345678Z";
        const expectedResult = "22345678Z"

        let replaceResult = replaceToNie(dni);

        expect(replaceResult).toBe(expectedResult);
    }),
    test("replaceToNie(Y2345678Z)", () => {
        const dni = "Y2345678Z";
        const expectedResult = "12345678Z"

        let replaceResult = replaceToNie(dni);

        expect(replaceResult).toBe(expectedResult);
    }),
    test("replaceToNie(X2345678Z)", () => {
        const dni = "X2345678Z";
        const expectedResult = "02345678Z"

        let replaceResult = replaceToNie(dni);

        expect(replaceResult).toBe(expectedResult);
    })
})

describe("isValidDni(dni)", () => {
    test("isValidDni() to be defined", () => {
        expect(isValidDni).toBeDefined();
    }),
    test("isValidDni(876543212Z) should return false, error length", () => {
        const dni = "876543212Z";
        const expectedResult = false;

        let dniValidationResult = isValidDni(dni);

        expect(dniValidationResult).toBe(expectedResult);
    }),
    test("isValidDni(87654321U) should return false, error exception letter", () => {
        const dni = "87654321U";
        const expectedResult = false;

        let dniValidationResult = isValidDni(dni);

        expect(dniValidationResult).toBe(expectedResult);
    }),
    test("isValidDni(87654321Z) should return false, error different letter", () => {
        const dni = "87654321Z";
        const expectedResult = false;

        let dniValidationResult = isValidDni(dni);

        expect(dniValidationResult).toBe(expectedResult);
    }),
    test("isValidDni(87654321X) should return is valid dni", () => {
        const dni = "87654321X";
        const expectedResult = true;

        let dniValidationResult = isValidDni(dni);

        expect(dniValidationResult).toBe(expectedResult);
    }), 
    test("isValidDni(X1234567L)", () => {
        const dni = "X1234567L";
        const expectedResult = true;

        let dniValidationResult = isValidDni(dni);

        expect(dniValidationResult).toBe(expectedResult);
    })
})