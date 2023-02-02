import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from 'utils/GlobalStyles';
import { fetchCurrentUser } from 'redux/auht/auth-operations';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';
import { selectIsFetchingCurentUser } from 'redux/auht/auth-selector';
import { ChakraProvider } from '@chakra-ui/react';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage' /* webpackChunkName: "home-page" */));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */));


export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurentUser = useSelector(selectIsFetchingCurentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <ChakraProvider>
        {!isFetchingCurentUser && (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
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
      </ChakraProvider>
    </>
  );
};
