import { QuoteCard } from "@/components";
import styles from "../../styles/AllQuotesPage.module.css";

const fetchQuotes = () => {
  return fetch('http://localhost:3001/getQuotes', {cache: "no-store"})
  .then(res => res.json())
}

// const quotes = [
//   {
//     author: "Eleanor Roosevelt",
//     quote: "The future belongs to those who believe in the beauty of their dreams.",
//   },
//   {
//     author: "Jimmy Dean",
//     quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
//   },
//   {
//     author: "Jordan Belfort",
//     quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
//   },
//   {
//     author: "Eleanor Roosevelt",
//     quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
//   },
//   {
//     author: "Eleanor Roosevelt",
//     quote: "The future belongs to those who believe in the beauty of their dreams.",
//   },
//   {
//     author: "Jimmy Dean",
//     quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
//   },
//   {
//     author: "Jordan Belfort",
//     quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
//   },
//   {
//     author: "Eleanor Roosevelt",
//     quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
//   },
// ];

export default async function Quotes() {
  const quotes = await fetchQuotes();
  return (
    <section className={styles.section}>
      <h1 className="title">All quotes</h1>
      <div className={styles.container}>
        {quotes.map(({ author, quote }) => (
          <QuoteCard key="quote" author={author} quote={quote} />
        ))}
      </div>
    </section>
  );
}
