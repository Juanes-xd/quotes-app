import { AddForm } from "@/components";
import styles from '../../../../styles/AddQuoteErrorPage.module.css'

export default function AddQuoteErrorPage({ params }) {
  let { id } = params;
  let newId = id.split("%20").join(" ")
  let finalId = newId.slice(9, newId.length);
  return (
    <section className={styles.section}>
      <h1 className="title">{finalId}</h1>
    </section>
  );
}
