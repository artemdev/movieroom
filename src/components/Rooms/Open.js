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
        //send request to API with Vote
        dispatch(roomsOperations.voteDislike(movie.id, roomOpened));
    };

    const handleLike = () => {
        dispatch(roomsOperations.voteLike(movie.id, roomOpened));
    };

    useEffect(() => {
        dispatch(roomsOperations.getMoviesInRoom(roomOpened));
    }, [dispatch, roomOpened]);

    return (
        <div>
            {/* <ul className={styles.gallery}> */}
            {movie && (
                <section>
                    <h3>{movie.title}</h3>
                    <img src={MOVIE_DB_URL + movie.backdrop_path} alt="" />
                    <h3>{movie.overview}</h3>
                    {movie.id}
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
