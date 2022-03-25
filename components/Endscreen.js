import Router from 'next/router';
import styles from './Endscreen.module.scss';
import Button from './reusable/Button';

export default function Endscreen({ show, data }) {
  const onClick = (event) => {
    event.preventDefault();

    Router.reload(window.location.href);
  };

  return (
    <div
      className={`${styles.endscreen_container} ${
        show ? styles.show : styles.hide
      }`}
    >
      <div className={styles.box}>
        <p className={styles.description}>Die Entfernung beträgt ...</p>
        <h3 className={styles.distance}>
          {Math.round(data.distance / 1000)} km
        </h3>
        <Button onClick={onClick} title="Restart" />
      </div>
    </div>
  );
}
