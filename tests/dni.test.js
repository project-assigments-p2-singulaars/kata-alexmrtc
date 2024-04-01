import { test, expect, describe } from "vitest";
import { isValidDni, checkDniLength } from "./dni";

describe("checkDniLength(dni)", () => {
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
    })
})