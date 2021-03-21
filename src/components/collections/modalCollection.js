import styles from './styles.module.css';

export default function Collection({ movie }) {
    return (
        <>
            <img
                className={styles.modalCollectionImage}
                src={movie.coverUrl}
                alt=""
            />
            <p className={styles.modalCollectionText}>
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
            </p>
        </>
    );
}
