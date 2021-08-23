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

    const exitRoom = () => {
        dispatch(roomsOperations.exit());
    };

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
        <div>
            {movie && (
                <section>
                    <h3>{movie.title}</h3>
                    <img src={MOVIE_DB_URL + movie.backdrop_path} alt="" />
                    <h3>{movie.overview}</h3>
                    <button onClick={handleLike}>Не нравится</button>
                    <button onClick={handleDislike}>Нравится</button>
                </section>
            )}

            <div className={styles.notification}>
                Вы не смогли выбрать общий фильм. Выбрать случайный из фаворитов
            </div>

            <button onClick={exitRoom} className={styles.btn}>
                CLOSE ROOM
            </button>
        </div>
    );
}
