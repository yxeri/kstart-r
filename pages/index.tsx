import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Forms</title>
      </Head>

      <div className={styles.formList}>
        <h1>Homepage</h1>
      </div>

      <footer className={styles.footer}>
        <h2>Gamble</h2>
      </footer>
    </div>
  );
}
