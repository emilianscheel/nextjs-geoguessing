import styles from './Overlay.module.scss';

export default function Overlay({ text }) {
  return (
    <div className={styles.overlay_container}>
      <span>{text}</span>
    </div>
  );
}
