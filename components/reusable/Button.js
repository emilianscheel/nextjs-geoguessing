import styles from './Button.module.scss';

export default function Button({ onClick, title }) {
  return (
    <button onClick={onClick} className={styles.button}>
      <span className={styles.title}>{title}</span>
    </button>
  );
}
