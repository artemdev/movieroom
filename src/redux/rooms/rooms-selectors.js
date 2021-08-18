const getIsOpen = state => state.rooms.isOpen;
// const getMovies = state => state.rooms.movies;
const getCurrentMovie = state => state.rooms.currentMovie;
const roomsSelectors = {
    getIsOpen,
    getCurrentMovie,
};

export default roomsSelectors;
