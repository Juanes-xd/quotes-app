import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    min: 5,
    max: 50,
  },
  quote: {
    type: String,
    required: true,
    min: 20,
    max: 500,
  }
}, {timestamps: true});

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
