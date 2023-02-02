export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectEror = state => state.auth.error();
export const selectIsFetchingCurentUser = state =>
  state.auth.user.isFetchingCurrentUser;
