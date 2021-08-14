import * as styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { roomsOperations, roomsSelectors } from '../../redux/rooms';

export default function RoomOpenResults(_props) {
    const roomOpened = useSelector(roomsSelectors.getIsOpen);
    const { movies } = useSelector(roomsSelectors.getMovies);
    const dispatch = useDispatch();
    const MOVIE_DB_URL = 'https://image.tmdb.org/t/p/w500/';
    if (!roomOpened) {
        window.location = '/collections';
    }

    const exitRoom = () => {
        dispatch(roomsOperations.exit());
    };

    useEffect(() => {
        dispatch(roomsOperations.getMoviesInRoom('60abe6e59ac60b001c0c06ca'));
    }, [dispatch, roomOpened]);

    return (
        <div>
            <ul className={styles.gallery}>
                {movies &&
                    movies.map((movie, index) => (
                        <li key={index}>
                            <section>
                                <h3>{movie.title}</h3>
                                <img
                                    src={MOVIE_DB_URL + movie.backdrop_path}
                                    alt=""
                                />
                                <h3>{movie.overview}</h3>
                                {movie.id}
                            </section>
                        </li>
                    ))}
            </ul>

            <div className={styles.notification}>
                Вы не смогли выбрать общий фильм. Выбрать случайный из фаворитов
            </div>

            <button onClick={exitRoom} className={styles.btn}>
                CLOSE ROOM
            </button>
        </div>
    );
}
