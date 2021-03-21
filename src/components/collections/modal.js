import styles from './styles.module.css';
import ModalCollection from './modalCollection';
export default function Modal({ show, collection, onClose }) {
    if (!show) {
        return null;
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalBody}>
                    {collection.movies &&
                        collection.movies.map(movie => (
                            <div className={styles.modalCollectionBody}>
                                <ModalCollection movie={movie} />
                            </div>
                        ))}
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={onClose} className={styles.modalClose}>
                        Отмена
                    </button>
                    <button onClick={onClose} className={styles.modalNext}>
                        Выбрать
                    </button>
                </div>
            </div>
        </div>
    );
}
