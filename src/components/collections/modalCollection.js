import styles from './styles.module.css';
import { IMAGE_URL } from '../../helpers/routes';

export default function Collection({ movie }) {
    return (
        <>
            <img
                className={styles.modalCollectionImage}
                src={IMAGE_URL + movie.backdrop_path}
                alt=""
            />
            <div className={styles.modalCollectionText}>
                <h4>{movie.title}</h4>
                <span className={styles.modalCollectionRating}>
                    Рейтинг: {movie.rating}
                </span>
                <span className={styles.modalCollectionGenres}>
                    Жанры:{' '}
                    {movie.genres &&
                        movie.genres.map((genre, i) => {
                            if (i !== movie.genres.length - 1) {
                                genre = `${genre}, `;
                            }
                            return genre;
                        })}
                </span>
                <span className={styles.modalCollectionYear}>
                    Год создания: {movie.year}
                </span>
                <span className={styles.modalCollectionDuration}>
                    Продолжительность: {movie.duration}
                </span>
            </div>
        </>
    );
}
