import { validateAndStoreQuote } from "../functions/quoteValidator";

describe("validateAndStoreQuote", () => {
  it("should store a quote without special characters", () => {
    const quote = "Sin la ayuda de mis compañeros no seria nada de nada";
    const storedName = validateAndStoreQuote(quote);
    expect(storedName).toBe(quote);
  });

  it("should throw an error if quote is empty", () => {
    const quote = "";
    expect(() => {
      validateAndStoreQuote(quote);
    }).toThrow("Quote is required");
  });

  it("should throw an error if quote contains special characters", () => {
    const quote = "Sin la @yuda de mis compañeros no seria nada de nada";
    expect(() => {
      validateAndStoreQuote(quote);
    }).toThrow("Quote cannot contain @#$^*{}|<>");
  });

  it("should throw an error if quote contain less than 20 characters", () => {
    const quote = "Sin la ayuda";
    expect(() => {
      validateAndStoreQuote(quote);
    }).toThrow("Quote cannot contain less than 20 characters");
  });

  it("should throw an error if quote contain more than 200 characters", () => {
    const quote =
      "Lionel Messi is widely considered one of the greatest footballers of all time. His incredible skill on the ball, vision, and goal-scoring ability have earned him countless accolades and adoration from fans around the world.";
    expect(() => {
      validateAndStoreQuote(quote);
    }).toThrow("Quote cannot contain more than 200 characters");
  });
});
