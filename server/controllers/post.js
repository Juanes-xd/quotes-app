import Quote from "../models/quote.js";
import { validateAndStoreName } from "../functions/nameValidator.js";
import { validateAndStoreQuote } from "../functions/quoteValidator.js";

export const addQuote = async (req, res) => {
  try {
    const { author, quote } = req.body;

    const authorVerified = validateAndStoreName(author);
    const quoteVerified = validateAndStoreQuote(quote)

    const newQuote = new Quote({
      author: authorVerified,
      quote: quoteVerified,
    });

    await newQuote.save();
    const quoteSaved = await Quote.find();
    res.redirect("http://localhost:3000/all-quotes")
  } catch (err) {
    res.redirect(`http://localhost:3000/add-quote/error/${err}`)
  }
};

export const getQuotes = async (req, res) => {
    try {
      const quote = await Quote.find();
      res.status(200).json(quote);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };