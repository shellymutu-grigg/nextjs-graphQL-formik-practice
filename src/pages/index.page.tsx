/* eslint-disable prettier/prettier */
import Head from 'next/head';
import Image from 'next/image';
import { Card } from '@components/Card';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practice Repo</title>
        <meta name="description" content="Practice implementing next.js" />
        <link rel="icon" href="/logo_utum.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Practice implementating of Next.js!</h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>src/pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Card
            title="Typescript"
            content="Practice using Typescript"
            href="#"
          />
          <Card
            title="Jest"
            content="Demonstration of Jest in action"
            href="#"
          />

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
              src="/logo_utum.svg"
              alt="UTUM Logo"
              width={72}
              height={25}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
