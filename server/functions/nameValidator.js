// Function to validate and store a name without special characters
export const validateAndStoreName = (name) => {
  if (!name) {
    throw new Error("Name is required");
  }

  // Regular expression to check for special characters
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/g;

  if (specialChars.test(name)) {
    throw new Error("Name cannot contain special characters");
  }

  const minLength = 5;
  const maxLength = 30;
  const lengthRegex = new RegExp(`^.{${minLength},${maxLength}}$`);

  if (!lengthRegex.test(name)) {
    throw new Error("Name is not between 5 and 30 characters long.");
  }

  // Store the name
  const storedName = name;

  return storedName;
};
