import styles from './Button.module.scss';
import Icon from './Icon';

export default function Button({ onClick, title, icon }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {icon && <Icon src={icon} />}
      <span className={styles.title}>{title}</span>
    </button>
  );
}
