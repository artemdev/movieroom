import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { roomsOperations, roomsSelectors } from '../../redux/rooms';
import * as styles from './styles.module.css';
import like from '../../images/like.svg';

export default function Results() {
    const dispatch = useDispatch();
    const MOVIE_DB_URL = 'https://image.tmdb.org/t/p/w500/';
    const roomId = useSelector(roomsSelectors.getIsOpen);
    const votes = useSelector(roomsSelectors.getResultsVotes);

    let peopleVoted = 0;

    const closeRoom = () => {
        dispatch(roomsOperations.close());
    };

    useEffect(() => {
        dispatch(roomsOperations.getResultsInRoom(roomId));
    }, [roomId, dispatch]);

    return (
        <>
            Идет голосование: проголосовало {peopleVoted} учасника
            <ul className={styles.movies}>
                {Object.values(votes).map((vote, index) => {
                    return (
                        <li className={styles.movie} key={index}>
                            <p className={styles.movieImageWrap}>
                                <img
                                    alt="cover"
                                    className={styles.movieImage}
                                    src={MOVIE_DB_URL + vote.cover}
                                />
                                <span className={styles.movieLikesWrap}>
                                    <p className={styles.movieLikes}>
                                        <img
                                            src={like}
                                            className={styles.movieLikeImage}
                                            alt="movieLike"
                                        />
                                        {vote.likes}
                                    </p>
                                </span>
                            </p>
                            <p className={styles.movieTitle}>{vote.title}</p>
                            <p className={styles.movieYear}>{vote.year}</p>
                        </li>
                    );
                })}
            </ul>
            <button onClick={closeRoom}>CLOSE</button>
        </>
    );
}
