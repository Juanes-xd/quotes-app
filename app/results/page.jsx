import { QuoteCard, SearchForm } from "@/components";
import styles from "../../styles/ResultsPage.module.css";

const fetchQuotes = () => {
  return fetch('http://localhost:3001/getQuotes', {cache: "no-store"})
  .then(res => res.json())
}

export default async function Results() {
  const quotes = await fetchQuotes();
  return (
    <section className={styles.section}>
      <SearchForm type="row" />
      <h1 className="title">results</h1>
      <div className={styles.container}>
        {quotes.map(({ author, quote }) => (
          <QuoteCard key="quote" author={author} quote={quote} />
        ))}
      </div>
    </section>
  );
}
