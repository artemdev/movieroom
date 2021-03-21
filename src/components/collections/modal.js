import styles from './styles.module.css';
import ModalCollection from './modalCollection';
import axios from 'axios';
// require('dotenv').config();
// console.log(process.env.MOVIES_API_KEY); undefined :(
const API_KEY = 'ca745db198ca3fbe8342f07480e09405';

export default function Modal({ show, collection, onClose }) {
    if (!show) {
        return null;
    }
    const getCollection = async e => {
        e.preventDefault();
        const id = 10;
        const movies = await axios
            .get(
                `https://api.themoviedb.org/3/collection/${id}?api_key=${API_KEY}`,
            )
            .then(({ data }) => data.parts)
            .catch(e => console.log(e));
        console.log(movies);
        return movies;
    };
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalBody}>
                    {collection.movies &&
                        collection.movies.map((movie, i) => (
                            <div key={i} className={styles.modalCollectionBody}>
                                <ModalCollection movie={movie} />
                            </div>
                        ))}
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={onClose} className={styles.modalClose}>
                        Отмена
                    </button>
                    <button
                        onClick={getCollection}
                        className={styles.modalNext}
                    >
                        Выбрать
                    </button>
                </div>
            </div>
        </div>
    );
}
