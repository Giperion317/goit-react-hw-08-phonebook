import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { RegisterPage } from 'pages/PegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { GlobalStyle } from 'utils/GlobalStyles';
import { fetchCurrentUser } from 'redux/auht/auth-operations';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';
import { selectIsFetchingCurentUser } from 'redux/auht/auth-selector';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurentUser = useSelector(selectIsFetchingCurentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {!isFetchingCurentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute restricted>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      )}
      <GlobalStyle />
    </>
  );
};
