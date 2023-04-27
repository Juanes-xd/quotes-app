import { QuoteCard } from "@/components";
import styles from "../../styles/AllQuotesPage.module.css";

const fetchQuotes = () => {
  return fetch('http://localhost:3001/getQuotes', {cache: "no-store"})
  .then(res => res.json())
}

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
