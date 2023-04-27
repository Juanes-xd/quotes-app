import { AddForm } from "@/components";
import styles from '../../../styles/AddQuoteErrorPage.module.css'

export default function AddQuoteErrorPage() {
  return (
    <section className={styles.section}>
      <h1 className="title">Adding a quote</h1>
      <AddForm />
    </section>
  );
}
