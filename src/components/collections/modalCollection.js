import styles from './styles.module.css';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

export default function Collection({ movie }) {
    const showGenres = genre_ids => {
        const apiGenres = [
            {
                id: 28,
                name: 'боевик',
            },
            {
                id: 12,
                name: 'приключения',
            },
            {
                id: 16,
                name: 'мультфильм',
            },
            {
                id: 35,
                name: 'комедия',
            },
            {
                id: 80,
                name: 'криминал',
            },
            {
                id: 99,
                name: 'документальный',
            },
            {
                id: 18,
                name: 'драма',
            },
            {
                id: 10751,
                name: 'семейный',
            },
            {
                id: 14,
                name: 'фэнтези',
            },
            {
                id: 36,
                name: 'история',
            },
            {
                id: 27,
                name: 'ужасы',
            },
            {
                id: 10402,
                name: 'музыка',
            },
            {
                id: 9648,
                name: 'детектив',
            },
            {
                id: 10749,
                name: 'мелодрама',
            },
            {
                id: 878,
                name: 'фантастика',
            },
            {
                id: 10770,
                name: 'телевизионный фильм',
            },
            {
                id: 53,
                name: 'триллер',
            },
            {
                id: 10752,
                name: 'военный',
            },
            {
                id: 37,
                name: 'вестерн',
            },
        ];

        const movieGenres = genre_ids.reduce(
            (accumulator, currentId, _currentIndex, _array) => {
                apiGenres.map((el, _index) => {
                    if (el.id === currentId) {
                        accumulator.push(el.name);
                    }
                });

                return accumulator;
            },
            [],
        );

        return movieGenres.join(', ');
    };

    return (
        <>
            <div className={styles.placeholder}>
                <div
                    className={styles.modalCollectionImageWrap}
                    style={{
                        backgroundImage: 'url(placeholder.jpg)',
                    }}
                >
                    <img
                        className={styles.modalCollectionImage}
                        src={IMAGE_URL + movie.poster_path}
                        alt=""
                    />
                </div>
            </div>

            <div className={styles.modalCollectionText}>
                <h4>{movie.title}</h4>
                <span className={styles.modalCollectionRating}>
                    Рейтинг: {movie.vote_average}
                </span>

                <span className={styles.modalCollectionYear}>
                    Год создания: {movie.release_date.split('-')[0]}
                </span>
                <span className={styles.modalCollectionYear}>
                    Жанры: {showGenres(movie.genre_ids)}
                </span>
            </div>
        </>
    );
}
