import styles from './header.module.css';
export default function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.slidedown}>My To do list</h1>
        </div>
    );
}