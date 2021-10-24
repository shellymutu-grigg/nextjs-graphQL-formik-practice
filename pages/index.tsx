/* eslint-disable prettier/prettier */
import Head from 'next/head';
import Image from 'next/image';
import { Card } from '@components/Card/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practice Repo</title>
        <meta name="description" content="Practice implementing next.js" />
        <link rel="icon" href="/logo_utum.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Practice of implementating of Next.js!</h1>

        <div className={styles.grid}>
          <Card title="Typescript" content="Practice Typescript" href="#" />
          <Card title="new test" content="test" href="#" />
          <a href="#" className={styles.card}>
            <h2>Typescript &rarr;</h2>
            <p>Practice Typescript</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Jest &rarr;</h2>
            <p>Demo of Jest in action</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Formik Form &rarr;</h2>
            <p>See formik in action</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>GraphQL &rarr;</h2>
            <p>Connecting graphQL to contentful</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.utum.co.nz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src="/favicon.ico"
              alt="UTUM Logo"
              width={20}
              height={40}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
