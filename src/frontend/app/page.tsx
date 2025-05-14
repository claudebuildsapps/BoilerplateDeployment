import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> Boilerplate
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>app/page.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href="/todos" className={styles.card}>
            <h2>Todo App Example &rarr;</h2>
            <p>Check out our example Todo application built with this boilerplate.</p>
          </Link>
          
          <a
            href="https://nextjs.org/docs"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </div>
    </main>
  );
}