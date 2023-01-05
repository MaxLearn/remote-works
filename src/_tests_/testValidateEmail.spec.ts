import { validatePassword } from './../hooks/validatePassword';
import { ValidateEmail } from "../hooks/validation/validateEmail";

describe("Validation of email", () => {
    test("it should validate the email format (testing@hotmail.com)", () => {
    const input = "testing@hotmail.com";
    const output = true;
    expect(ValidateEmail(input)).toEqual(output);
    });
    test("it should not validate the email format (testing)", () => {
    const input = "testing@hotmail.com";
    const output = false;
    expect(ValidateEmail(input)==output);
    });
  });
describe("Validation of password", () => {
    test("it should validate the password format (12345)", () => {
    const input = "12345";
    const output = true;
    expect(validatePassword(input)).toEqual(output);
    });
    test("it should not validate the password format (123)", () => {
    const input = "123";
    const output = false;
    expect(validatePassword(input)==output);
    });
  });