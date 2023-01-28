import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.error = null;
        state.user = user;
        state.token = token;
      })
      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.error = null;
        state.user = user;
        state.token = token;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.token = null;
        state.user = { name: '', email: '' };
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.isFetchingCurrentUser = false;
        state.user = payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isFetchingCurrentUser = false;
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          fetchCurrentUser.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.rejected,
          fetchCurrentUser.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default authSlice.reducer;
