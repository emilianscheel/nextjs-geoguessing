import styles from './Overlay.module.scss';

export default function Overlay({ text, onClick }) {
  return (
    <div className={styles.overlay_container} onClick={onClick}>
      <span>{text}</span>
    </div>
  );
}
