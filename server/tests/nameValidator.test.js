// const validateAndStoreName = require('../functions/nameValidator.js');
import { validateAndStoreName } from "../functions/nameValidator";

describe('validateAndStoreName', () => {
  it('should store a name without special characters', () => {
    const name = 'John Doe';
    const storedName = validateAndStoreName(name);
    expect(storedName).toBe(name);
  });

  it('should throw an error if name is empty', () => {
    const name = '';
    expect(() => {
      validateAndStoreName(name);
    }).toThrow('Name is required');
  });

  it('should throw an error if name contains special characters', () => {
    const name = 'John@Doe';
    expect(() => {
      validateAndStoreName(name);
    }).toThrow('Name cannot contain special characters');
  });
});