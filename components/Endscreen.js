import styles from './Endscreen.module.scss';

export default function Endscreen({ show, data }) {
  return (
    <div
      className={`${styles.endscreen_container} ${
        show ? styles.show : styles.hide
      }`}
    >
      <div className={styles.box}>
        <span className={styles.description}>Die Entfernung beträgt ...</span>
        <h3 className={styles.distance}>
          {Math.round(data.distance / 1000)} km
        </h3>
      </div>
    </div>
  );
}
