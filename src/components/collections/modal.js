import styles from './styles.module.css'
export default function Modal({ show, collections, onClose }) {
    if (!show) {
        return null
    }
    return (

        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Романтические комедии</h2>
                </div>
                <div className={styles.modalBody}>
                    {collections && collections.map(collection => <div>{collection.title}</div>)}
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={onClose} className={styles.modalClose}>Отмена</button>
                     <button onClick={onClose} className={styles.modalNext}>Выбрать</button>
                </div>
            </div>
        </div>
    )
}