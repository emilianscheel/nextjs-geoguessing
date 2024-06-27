import Link from "next/dist/client/link";
import Head from "next/head";
import Router from "next/router";
import Icon from "../components/reusable/Icon";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>GeoGuessr</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>GeoGuessr</h1>
                <p className={styles.text}>Digitale Welten</p>

                <div className={styles.grid}>
                    <Link href="/guessing" className={styles.card}>
                        <a className={styles.card}>
                            <h3>
                                <Icon name="person" />
                                Singleplayer &rarr;
                            </h3>
                        </a>
                    </Link>

                    <Link href="/multiplayer">
                        <a className={styles.card}>
                            <h3>
                                <Icon name="group" /> Multiplayer &rarr;
                            </h3>
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    );
}
