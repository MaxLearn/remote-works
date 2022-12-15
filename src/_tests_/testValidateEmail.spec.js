import { ValidateEmail } from "../hooks/validateEmail";

describe("Validation of email", () => {
    test("it should validate the email format (testing@hotmail.com)", () => {
    const input = "testing@hotmail.com";
    const output = true;
    expect(ValidateEmail(input)).toEqual(output);
    });
  });