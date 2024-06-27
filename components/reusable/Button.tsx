import styles from "./Button.module.scss";
import Icon from "./Icon";

export type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    title: string;
    icon?: string;
    className?: string;
};

export default function Button({
    onClick,
    title,
    icon,
    className,
}: ButtonProps) {
    return (
        <button onClick={onClick} className={`${styles.button} ${className}`}>
            {icon && <Icon name={icon} />}
            <span className={styles.title}>{title}</span>
        </button>
    );
}
