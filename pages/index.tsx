/* eslint-disable prettier/prettier */
import Head from 'next/head';
import Image from 'next/image';
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';
import { Card } from '@components/Card/Card';
import styles from '../styles/Home.module.css';

export default withPageAuthRequired(function Home() {
  const { user } = useUser();
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
          <Card
            title={user ? 'Logout' : 'Login'}
            content={user ? 'Allow users to logout' : 'Allow users to Login'}
            href={user ? '/api/auth/logout' : '/api/auth/login'}
            auth={!!user}
          />

          <a href="#" className={styles.card}>
            <h2>Jest &rarr;</h2>
            <p>Demo of Jest in action</p>
          </a>

          <Card
            title="Auth0 Resend Email"
            content="Resend Authentication Email from Auth0"
            href="/resend-email"
            auth={!!user}
          />

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
            <Image src="/favicon.ico" alt="UTUM Logo" width={20} height={40} />
          </span>
        </a>
      </footer>
    </div>
  );
});
