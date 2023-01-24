export const selectToken = state => state.auth.token;
export const selectEmail = state => state.auth.user.email;
export const selectIsFetchingCurentUser = state =>
  state.auth.user.isFetchingCurrentUser;
