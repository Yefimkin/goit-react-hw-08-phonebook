import React from 'react';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCurrentUser } from 'redux/authentication/authenticationOperation';
import { getAuthentication } from 'redux/authentication/authenticationSlice';

import { Layout } from './Application/Layout/Layout';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { Loader } from './Application/Loader/Loader';

const RegisterForm = lazy(() =>
  import('../components/Application/RegisterForm/RegisterForm')
);
const LoginForm = lazy(() =>
  import('../components/Application/LoginForm/LoginForm')
);
const Application = lazy(() => import('../components/Application/Application'));

function App() {
  const dispatch = useDispatch();
  const { isLoadingUser } = useSelector(getAuthentication);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isLoadingUser ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterForm />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginForm />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Application />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      )}
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
