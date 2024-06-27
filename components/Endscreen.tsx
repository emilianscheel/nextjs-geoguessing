import Router, { useRouter } from "next/router";
import { MouseEvent } from "react";
import styles from "./Endscreen.module.scss";
import Button from "./reusable/Button";
import useSWR from "swr";
import { fetcher } from "../pages/guessing";
import { Result } from "../pages/api/[userId]/[roomId]/join";

type ResultCardProps = {
    result: Result
}

const ResultCard = ({
    result
}: ResultCardProps) => {

    return (
        <div>
            {result.}
        </div>
    )
}


export default function Endscreen({ data, className, retryClick }) {
    const router = useRouter();
    const userId = router.query.userId;
    const roomId = router.query.roomId;

    const { data: results } = useSWR(
        `/api/${userId}/${roomId}/results`,
        fetcher,
    );

    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        Router.reload();
    };

    return (
        <div
            className={`${styles.endscreen_container} ${data.show ? styles.show : styles.hide
                } ${className}`}
        >
            <div className={styles.box}>
                <p className={styles.description}>Die Entfernung beträgt ...</p>
                <h3 className={styles.distance}>
                    {Math.round(data.distance / 1000)} km
                </h3>

                {results?.map(() =>

                )}

                <Button
                    onClick={onClick}
                    className={styles.restart_button}
                    title="Neues Spiel starten"
                />
                <Button
                    onClick={retryClick}
                    className={styles.retry_button}
                    title="Nochmal versuchen"
                />
            </div>

            <div className={styles.corners}></div>
        </div>
    );
}
