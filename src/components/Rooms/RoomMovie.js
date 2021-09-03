import like from '../../images/like.png';
import dislike from '../../images/dislike.png';
import { roomsOperations, roomsSelectors } from '../../redux/rooms';
import { useDispatch, useSelector } from 'react-redux';
export default function RoomMovie({ styles }) {
    const dispatch = useDispatch();

    const MOVIE_DB_URL = 'https://image.tmdb.org/t/p/w500/';
    const handleDislike = () => {
        const movieId = movie && movie.id.toString();
        const options = { movieId, roomId: roomOpened };
        dispatch(roomsOperations.voteDislike(options));
    };

    const handleLike = () => {
        const movieId = movie && movie.id.toString();
        const options = { movieId, roomId: roomOpened };
        dispatch(roomsOperations.voteDislike(options));
    };

    const roomOpened = useSelector(roomsSelectors.getIsOpen);
    const movie = useSelector(roomsSelectors.getCurrentMovie);
    return (
        <>
            <div className={styles.movieInfo}>
                <img
                    className={styles.movieImage}
                    src={MOVIE_DB_URL + movie.poster_path}
                    alt=""
                />

                <section>
                    <h3 className={styles.movieTitle}>{movie.title}</h3>
                    <p className={styles.originalTitle}>
                        {movie.original_title}
                    </p>
                    <p className={styles.movieRating}>
                        Рейтинг <strong>{movie.vote_average}</strong> из{' '}
                        {movie.vote_count}
                    </p>
                    <p className={styles.movieYear}>
                        {movie.release_date.split('-')[0]}
                    </p>

                    <p className={styles.movieOverview}>{movie.overview}</p>
                </section>
            </div>
            <div className={styles.actionButtons}>
                <button
                    className={styles.actionButtonDislike}
                    onClick={handleDislike}
                >
                    <img src={dislike} className={styles.dislikeImage} alt="" />
                    Не нравится
                </button>
                <button
                    className={styles.actionButtonLike}
                    onClick={handleLike}
                >
                    <img src={like} className={styles.likeImage} alt="" />
                    Нравится
                </button>
            </div>
        </>
    );
}
