import * as styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { roomsOperations, roomsSelectors } from '../../redux/rooms';

export default function RoomOpenResults(_props) {
    const roomOpened = useSelector(roomsSelectors.getIsOpen);
    const movie = useSelector(roomsSelectors.getCurrentMovie);
    const dispatch = useDispatch();
    const MOVIE_DB_URL = 'https://image.tmdb.org/t/p/w500/';
    if (!roomOpened) {
        window.location = '/collections';
    }

    // const exitRoom = () => {
    //     dispatch(roomsOperations.exit());
    // };

    const handleDislike = () => {
        const movieId = movie.id.toString();
        const options = { movieId, roomId: roomOpened };
        dispatch(roomsOperations.voteDislike(options));
    };

    const handleLike = () => {
        const movieId = movie.id.toString();
        const options = { movieId, roomId: roomOpened };
        dispatch(roomsOperations.voteDislike(options));
    };

    useEffect(() => {
        dispatch(roomsOperations.getMoviesInRoom(roomOpened));
    }, [dispatch, roomOpened]);

    return (
        <div className={styles.roomMovies}>
            {movie && (
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
                        <p>{movie.overview}</p>
                        <p>
                            Рейтинг {movie.vote_average} из {movie.vote_count}
                        </p>
                        <p>{movie.release_date}</p>

                        <p>{movie.overview}</p>
                    </section>
                </div>
            )}

            <div className={styles.actionButtons}>
                <button
                    className={styles.actionButtonDislike}
                    onClick={handleDislike}
                >
                    Не нравится
                </button>
                <button
                    className={styles.actionButtonLike}
                    onClick={handleLike}
                >
                    Нравится
                </button>
            </div>

            {/* <button onClick={exitRoom} className={styles.btn}>
                CLOSE ROOM
            </button> */}
        </div>
    );
}
