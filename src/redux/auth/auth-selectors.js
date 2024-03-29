const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getToken = state => state.auth.token;
const getVerify = state => state.auth.verify;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const getError = state => state.auth.error;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getIsFetchingCurrentUser,
    getError,
    getToken,
    getVerify,
};
export default authSelectors;
