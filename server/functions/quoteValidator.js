// Function to validate and store a quote without special characters
export const validateAndStoreQuote = (quote) => {
  if (!quote) {
    throw new Error("Quote is required");
  }

  const minLength = 20;
  const maxLength = 200;
  const lengthRegex = new RegExp(`^.{${minLength},${maxLength}}$`);

  if (!lengthRegex.test(quote)) {
    throw new Error("Quote is not between 20 and 200 characters long.");
  }

  // Regular expression to check for special characters
  const specialChars = /[@#$^*{}|<>]/g;

  if (specialChars.test(quote)) {
    throw new Error("Quote cannot contain special characters");
  }

  // Store the Quote
  const storedQuote = quote;

  return storedQuote;
};
