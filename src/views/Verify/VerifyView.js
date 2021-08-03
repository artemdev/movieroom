import styles from './VerifyView.module.css';

// делать запрос к API чтобы обновлять переменную verify
export default function VerifyView() {
    return (
        <p className={styles.title}>
            Please check your email to verify the page
        </p>
    );
}
