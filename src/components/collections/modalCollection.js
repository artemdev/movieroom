import styles from './styles.module.css';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

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
                    8 film.ru 72 зрители
                </span>
                <span className={styles.modalCollectionGenres}>
                    Жанры: Драма
                    {/* {movie.genres &&
                        movie.genres.map((genre, i) => {
                            if (i !== movie.genres.length - 1) {
                                genre = `${genre}, `;
                            }
                            return genre;
                        })} */}
                </span>
                <span className={styles.modalCollectionYear}>
                    Год создания: 2020
                    {/* {movie.year} */}
                </span>
                <span className={styles.modalCollectionDuration}>
                    Страна: Дания, Швеция, Нидерланды
                </span>
                <span className={styles.modalCollectionDuration}>
                    Продолжительность: 1 час 57 минут
                    {/* {movie.duration} */}
                </span>
            </div>
        </>
    );
}
