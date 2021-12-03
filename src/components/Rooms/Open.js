import * as styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { roomsOperations, roomsSelectors } from '../../redux/rooms';
import RoomMovie from './RoomMovie';
import Loader from './Loader';
import Results from './Results';

export default function RoomOpenResults(_props) {
    const roomOpened = useSelector(roomsSelectors.getIsOpen);
    const movie = useSelector(roomsSelectors.getCurrentMovie);

    const dispatch = useDispatch();

    if (!roomOpened) {
        window.location = '/collections';
    }

    const movieLoading = useSelector(roomsSelectors.getMovieIsLoading);

    useEffect(() => {
        dispatch(roomsOperations.getMovieInRoom(roomOpened));
    }, [dispatch, roomOpened]);

    return movieLoading ? (
        <Loader />
    ) : (
        <div className={styles.roomMovies}>
            {movie.title ? <RoomMovie styles={styles} /> : <Results />}
            {/* {<RoomMovie styles={styles} />} */}
        </div>
    );
}
