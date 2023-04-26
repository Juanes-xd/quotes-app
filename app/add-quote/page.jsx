import { AddForm } from "@/components";
import styles from "../../styles/AddQuotePage.module.css"

export default function AddQuotePage() {
  return (
    <section className={styles.section}>
      <h1 className="title">Adding a quote</h1>
      <AddForm />
    </section>
  );
}
