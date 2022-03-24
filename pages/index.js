import Link from 'next/dist/client/link';
import Head from 'next/head';
import Icon from '../components/reusable/Icon';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>GeoGuessr</h1>

        <div className={styles.grid}>
          <a href="/guessing" className={styles.card}>
            <h3>
              <Icon src="/icons/multiplayer.svg" />
              Singleplayer &rarr;
            </h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="/guessing" className={styles.card}>
            <h3>
              <Icon src="/icons/multiplayer.svg" /> Multiplayer &rarr;
            </h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
