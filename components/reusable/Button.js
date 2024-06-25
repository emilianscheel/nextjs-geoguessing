import styles from "./Button.module.scss";
import Icon from "./Icon";

export default function Button({ onClick, title, icon, className }) {
    return (
        <button onClick={onClick} className={`${styles.button} ${className}`}>
            {icon && <Icon name={icon} />}
            <span className={styles.title}>{title}</span>
        </button>
    );
}
