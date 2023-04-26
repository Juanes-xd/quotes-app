import { SearchForm } from "@/components";
import styles from "../styles/Homepage.module.css";

export default function Homepage() {
  return (
    <section className={styles.section}>
      <h1 className="title">
        Words that inspire. Wisdom that guides.<br/>Welcome to our quotes website.
      </h1>
      <SearchForm type="column" />
    </section>
  );
}
