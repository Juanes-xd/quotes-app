// const validateAndStoreName = require('../functions/nameValidator.js');
import { validateAndStoreName } from "../functions/nameValidator";

describe("validateAndStoreName", () => {
  it("should store a name without special characters", () => {
    const name = "Lionel Messi";
    const storedName = validateAndStoreName(name);
    expect(storedName).toBe(name);
  });

  it("should throw an error if name is empty", () => {
    const name = "";
    expect(() => {
      validateAndStoreName(name);
    }).toThrow("Name is required");
  });

  it("should throw an error if name contains special characters", () => {
    const name = "Lionel Mes$i";
    expect(() => {
      validateAndStoreName(name);
    }).toThrow("Name cannot contain special characters");
  });

  it("should throw an error if name contain less than 5 characters", () => {
    const name = "Lio";
    expect(() => {
      validateAndStoreName(name);
    }).toThrow("Name cannot contain less than 5 characters");
  });

  it("should throw an error if name contain more than 30 characters", () => {
    const name = "Lionel Messi el mejor jugador del mundo";
    expect(() => {
      validateAndStoreName(name);
    }).toThrow("Name cannot contain more than 30 characters");
  });
});
