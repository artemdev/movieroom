import { useState, useEffect } from 'react';
import { getCollection, getGenres, getCredits } from '../../service/service';
import { lazy, Suspense } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//     ThumbUpAltOutlined,
//     ThumbDownAltOutlined,
//     Translate,
// } from '@material-ui/icons';
import s from './voteRoom.module.css';
import 'swiper/swiper-bundle.min.css';
import imageNotFound from '../../images/imageNotFound.png';

SwiperCore.use([Navigation, Scrollbar, A11y]);

function VoteRoom() {
    const [movies, setMovies] = useState(null);
    const [index, setIndex] = useState(0);
    const [oneFilm, setOneFilm] = useState(null);
    const [genres, setGenres] = useState(null);
    const [oneFilmGenre, setOneFilmGenre] = useState([]);
    const [cast, setCast] = useState(null);

    useEffect(() => {
        getCollection(9485).then(movies => setMovies(movies.parts));
    }, []);

    useEffect(() => {
        if (movies === null) {
            return;
        }
        setOneFilm(movies[index]);
    }, [index, movies]);

    useEffect(() => {
        getGenres().then(genres => setGenres(genres.genres));
    }, []);

    useEffect(() => {
        if (!oneFilm) {
            return;
        } else if (!genres) {
            return;
        }

        setOneFilmGenre([]);

        oneFilm.genre_ids.filter(id => {
            const genreArrey = genres.filter(genre => genre.id === id);

            return genreArrey.map(genres =>
                setOneFilmGenre(prevState => {
                    return [...prevState, genres.name];
                }),
            );
        });
    }, [genres, oneFilm]);

    useEffect(() => {
        if (oneFilm === null) {
            return;
        }
        getCredits(oneFilm.id).then(credits => setCast(credits.cast));
    }, [oneFilm]);

    // useEffect(() => {
    //     console.log(oneFilm);
    //     console.log(genres);
    //     console.log(oneFilmGenre);
    //     console.log(cast);
    // });
    const moveNext = () => {
        if (index === movies.length - 1) {
            return;
        }
        setIndex(prevState => prevState + 1);
    };

    return (
        <>
            {oneFilm && oneFilmGenre && cast && (
                <section className={s.voteRoom}>
                    <div className={s.navigation}>
                        <div className={s.linkShare}>
                            <button className={s.linkBtn}>
                                Скопировать ссылку
                            </button>
                            <button className={s.shareBtn}>
                                Поделиться ссылкой
                            </button>
                        </div>
                        <div className={s.userInfo}>
                            <p className={s.userName}>Yuliia</p>
                            <button className={s.exitBtn}>Выход</button>
                        </div>
                    </div>
                    <div className={s.movieDetails}>
                        <img
                            src={`https://image.tmdb.org/t/p/w400/${oneFilm.poster_path}`}
                            alt="poster"
                            className={s.posterImage}
                        ></img>
                        <div className={s.movieInfo}>
                            <h2 className={s.moviesTitle}>{oneFilm.title}</h2>
                            <h3 className={s.moviesOriginalTitle}>
                                {oneFilm.original_title}
                            </h3>
                            <div className={s.filmRating}>
                                <p className={s.voteAverage}>
                                    Средняя оценка: {oneFilm.vote_average}
                                </p>
                                <p className={s.voteTotalCount}>
                                    Общее количество: {oneFilm.vote_count}
                                </p>
                            </div>
                            <p className={s.filmReleaseAndGenres}>
                                {oneFilm.release_date.slice(0, 4)},{' '}
                                {oneFilmGenre.join(', ')}
                            </p>

                            <p></p>
                            <p className={s.filmOverview}>{oneFilm.overview}</p>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={4}
                                navigation
                            >
                                {cast.map((person, i) => (
                                    <SwiperSlide
                                        key={i}
                                        className={s.personCard}
                                        activeslidekey={person.id}
                                    >
                                        {person.profile_path ? (
                                            <img
                                                src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
                                                alt="person"
                                                className={s.personImage}
                                            ></img>
                                        ) : (
                                            <img
                                                src={imageNotFound}
                                                alt="person"
                                                className={s.personImage}
                                            ></img>
                                        )}
                                        {
                                            <p className={s.personName}>
                                                {person.name}
                                            </p>
                                        }
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className={s.voteButtons}>
                        <button className={s.voteBtnDis} onClick={moveNext}>
                            {' '}
                            {/* <ThumbDownAltOutlined className={s.voteIcon} /> Не */}
                            нравится
                        </button>
                        <button className={s.voteBtnLike} onClick={moveNext}>
                            {/* <ThumbUpAltOutlined className={s.voteIcon} /> */}
                            Нравится
                        </button>
                    </div>
                </section>
            )}
        </>
    );
}

export default VoteRoom;
