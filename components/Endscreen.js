import Router from 'next/router';
import styles from './Endscreen.module.scss';
import Button from './reusable/Button';

export default function Endscreen({ data, className, retryClick }) {
  const onClick = (event) => {
    event.preventDefault();

    Router.reload(window.location.href);
  };

  return (
    <div
      className={`${styles.endscreen_container} ${
        data.show ? styles.show : styles.hide
      } ${className}`}
    >
      <div className={styles.box}>
        <p className={styles.description}>Die Entfernung beträgt ...</p>
        <h3 className={styles.distance}>
          {Math.round(data.distance / 1000)} km
        </h3>
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
