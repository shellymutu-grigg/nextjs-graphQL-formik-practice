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
        <h2 className={styles.title}>
          Practice implementating Next.js & Friends!
        </h2>

        <div className={styles.grid}>
          <Card
            title="Authentication"
            content="Users are able to logout here"
            href="/api/auth/logout"
            auth={!!user}
          />
          <Card
            title="Auth0 Resend Email"
            content="Resend Authentication Email from Auth0"
            href="/resend-email"
            auth={!!user}
          />
          <Card
            title="Formik"
            content="See formik validation in action"
            href="/validation"
            auth={!!user}
          />

          <Card
            title="Jest"
            content="Demo of Jest in action"
            href="#"
            auth={!!user}
          />

          <Card
            title="Placeholder"
            content="Placeholder"
            href="#"
            auth={!!user}
          />{' '}
          
          <Card
            title="Graph QL"
            content="Connecting graphQL to contentful"
            href="#"
            auth={!!user}
          />
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
