import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Icon from "../components/reusable/Icon";
import { Input } from "../components/reusable/Input";
import styles from "../styles/Home.module.scss";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const generateKey = () => {
    return Math.floor(100000 + Math.random() * 900000);
};

export default function MultiplayerPage() {
    const router = useRouter();
    const [roomId, setRoomId] = useState("");
    const [newRoomId] = useState(generateKey());

    function joinGame() {
        router.push(`/guessing?roomId=${roomId}&userId=${generateKey()}}`);
    }

    function createGame() {
        navigator.clipboard.writeText(newRoomId.toString());
        toast.success("Code wurde erfolgreich kopiert");
    }

    function startGame() {
        router.push(`/guessing?roomId=${newRoomId}&userId=${generateKey()}`);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Multiplayer</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Multiplayer</h1>
                <p className={styles.text}>Digitale Welten</p>

                <div className={styles.flex}>
                    <div className={styles.group}>
                        <Input
                            type="number"
                            onChange={(event) => setRoomId(event.target.value)}
                        />

                        <div onClick={joinGame} className={styles.card}>
                            <h3>
                                <Icon name="group" />
                                Spiel beitreten
                            </h3>
                        </div>
                    </div>

                    <div className={styles.group}>
                        <h1 className={styles.key}>{newRoomId}</h1>

                        <div onClick={createGame} className={styles.card}>
                            <h3>
                                <Icon name="person_add" />
                                Person einladen
                            </h3>
                        </div>

                        <div onClick={startGame} className={styles.card}>
                            <h3>
                                <Icon name="play_arrow" />
                                Spiel starten
                            </h3>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
