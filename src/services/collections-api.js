import axios from 'axios';
import { API_BACKEND } from '../helpers/routes';

const mockup = {
    id: 10,
    name: 'Star Wars Collection',
    overview:
        'An epic space-opera theatrical film series, which depicts the adventures of various characters "a long time ago in a galaxy far, far away…."',
    poster_path: '/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg',
    backdrop_path: '/d8duYyyC9J5T825Hg7grmaabfxQ.jpg',
    parts: [
        {
            video: false,
            vote_average: 8.2,
            overview:
                'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
            release_date: '1977-05-25',
            vote_count: 15330,
            adult: false,
            backdrop_path: '/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg',
            title: 'Star Wars',
            genre_ids: [12, 28, 878],
            id: 11,
            original_language: 'en',
            original_title: 'Star Wars',
            poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
            popularity: 62.415,
        },
        {
            adult: false,
            backdrop_path: '/dMZxEdrWIzUmUoOz2zvmFuutbj7.jpg',
            genre_ids: [12, 28, 878],
            id: 1891,
            original_language: 'en',
            original_title: 'The Empire Strikes Back',
            overview:
                'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.',
            poster_path: '/7BuH8itoSrLExs2YZSsM01Qk2no.jpg',
            release_date: '1980-05-20',
            title: 'The Empire Strikes Back',
            video: false,
            vote_average: 8.4,
            vote_count: 12784,
            popularity: 27.187,
        },
        {
            adult: false,
            backdrop_path: '/iP2tEA2A77qhbhRfcFkiD6WFOqH.jpg',
            genre_ids: [12, 28, 878],
            id: 1892,
            original_language: 'en',
            original_title: 'Return of the Jedi',
            overview:
                'Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.',
            poster_path: '/mDCBQNhR6R0PVFucJl0O4Hp5klZ.jpg',
            release_date: '1983-05-25',
            title: 'Return of the Jedi',
            video: false,
            vote_average: 7.9,
            vote_count: 11149,
            popularity: 23.246,
        },
        {
            adult: false,
            backdrop_path: '/9r4IRZUJ564J38EcLRPM9uUZlVp.jpg',
            genre_ids: [12, 28, 878],
            id: 1893,
            original_language: 'en',
            original_title: 'Star Wars: Episode I - The Phantom Menace',
            overview:
                'Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.',
            poster_path: '/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg',
            release_date: '1999-05-19',
            title: 'Star Wars: Episode I - The Phantom Menace',
            video: false,
            vote_average: 6.5,
            vote_count: 10875,
            popularity: 28.308,
        },
        {
            adult: false,
            backdrop_path: '/dNt5q68BBkddBxlvrHDa1apyBy8.jpg',
            genre_ids: [12, 28, 878],
            id: 1894,
            original_language: 'en',
            original_title: 'Star Wars: Episode II - Attack of the Clones',
            poster_path: '/oZNPzxqM2s5DyVWab09NTQScDQt.jpg',
            video: false,
            title: 'Star Wars: Episode II - Attack of the Clones',
            vote_count: 9810,
            overview:
                'Following an assassination attempt on Senator Padmé Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot that could change the galaxy forever.',
            release_date: '2002-05-15',
            vote_average: 6.5,
            popularity: 27.064,
        },
        {
            overview:
                'The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side.',
            release_date: '2005-05-17',
            adult: false,
            backdrop_path: '/uuh6uNEGqLCU7wQ2L4xMqYv0DPr.jpg',
            genre_ids: [878, 12, 28],
            vote_count: 10169,
            original_language: 'en',
            original_title: 'Star Wars: Episode III - Revenge of the Sith',
            poster_path: '/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg',
            title: 'Star Wars: Episode III - Revenge of the Sith',
            video: false,
            vote_average: 7.3,
            id: 1895,
            popularity: 30.09,
        },
        {
            overview:
                'Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.',
            release_date: '2015-12-15',
            adult: false,
            backdrop_path: '/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg',
            genre_ids: [28, 12, 878, 14],
            vote_count: 15637,
            original_language: 'en',
            original_title: 'Star Wars: The Force Awakens',
            poster_path: '/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg',
            title: 'Star Wars: The Force Awakens',
            video: false,
            vote_average: 7.4,
            id: 140607,
            popularity: 52.35,
        },
        {
            overview:
                'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
            release_date: '2019-12-18',
            adult: false,
            backdrop_path: '/jn52me8AagfNt7r84SgQbV0R9ZG.jpg',
            genre_ids: [28, 12, 878],
            vote_count: 6526,
            original_language: 'en',
            original_title: 'Star Wars: The Rise of Skywalker',
            poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
            title: 'Star Wars: The Rise of Skywalker',
            video: false,
            vote_average: 6.5,
            id: 181812,
            popularity: 207.367,
        },
        {
            genre_ids: [878, 28, 12],
            title: 'Star Wars: The Last Jedi',
            original_language: 'en',
            original_title: 'Star Wars: The Last Jedi',
            poster_path: '/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
            video: false,
            vote_average: 6.9,
            overview:
                'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
            release_date: '2017-12-13',
            vote_count: 11766,
            id: 181808,
            adult: false,
            backdrop_path: '/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg',
            popularity: 68.71,
        },
    ],
};
export const fetchCollections = async () => {
    try {
        return await axios.get(`${API_BACKEND}/api/collections/}`);
    } catch (error) {
        console.log(error);
    }
};

export const fetchCollection = async (id = 10) => {
    // return await axios
    //     .get(`https://api.themoviedb.org/3/collection/${id}?api_key=${API_KEY}`)
    //     .then(({ data }) => data)
    //     .catch(e => console.log(e));
    return mockup;
};
