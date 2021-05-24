import styles from './styles.module.css';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

export default function Collection({ movie }) {
    return (
        <>
            <img
                className={styles.modalCollectionImage}
                src={IMAGE_URL + movie.poster_path}
                alt=""
            />
            <div className={styles.modalCollectionText}>
                <h4>{movie.title}</h4>
                <span className={styles.modalCollectionRating}>
                    Рейтинг: {movie.vote_average}
                </span>
                <span className={styles.modalCollectionGenres}>
                    Жанры:
                    {movie.genre_ids &&
                        movie.genre_ids.map((genre, i) => {
                            if (i !== movie.genre_ids.length - 1) {
                                genre = `${genre}, `;
                            }
                            return genre;
                        })}
                </span>
                <span className={styles.modalCollectionYear}>
                    Год создания: {movie.release_date.split('-')[0]}
                </span>
                {/* <span className={styles.modalCollectionDuration}>
                    Продолжительность: {movie.duration}
                </span> */}
            </div>
        </>
    );
}
