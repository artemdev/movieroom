const getIsOpen = state => state.rooms.isOpen;
const getMovies = state => state.rooms.movies;
const roomsSelectors = {
    getIsOpen,
    getMovies,
};

export default roomsSelectors;
