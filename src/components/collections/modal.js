import styles from './styles.module.css';
import ModalCollection from './modalCollection';
import { roomsOperations } from '../../redux/rooms';
import { roomsSelectors } from '../../redux/rooms';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

export default function Modal({ show, onClose, movies }) {
    // redirect when room is opened
    const roomOpened = useSelector(roomsSelectors.getIsOpen);
    roomOpened && (window.location = '/rooms');

    const dispatch = useDispatch();
    if (!show) {
        return null;
    }
    const handleSubmit = () => {
        dispatch(roomsOperations.create(movies));

        onClose();
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalBody}>
                    {movies &&
                        movies.map((movie, i) => (
                            <div key={i} className={styles.modalCollectionBody}>
                                <ModalCollection movie={movie} />
                            </div>
                        ))}
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={onClose} className={styles.modalClose}>
                        Отмена
                    </button>

                    <button onClick={handleSubmit} className={styles.modalNext}>
                        Выбрать
                    </button>
                </div>
            </div>
        </div>
    );
}
