const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const getError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrentUser,
  getError,
};
export default authSelectors;
