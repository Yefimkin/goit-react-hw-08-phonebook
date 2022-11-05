import React from 'react';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './Filter/Filter';
import { fetchCurrentUser } from 'redux/authentication/authenticationOperation';
import { getAuthentication } from 'redux/authentication/authenticationSlice';

import { Layout } from './Layout/Layout';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { RouteLoader } from './Loader/Loader';

const RegisterForm = lazy(() =>
  import('../components/RegisterForm/RegisterForm')
);
const LoginForm = lazy(() => import('../components/LoginForm/LoginForm'));

function App() {
  const dispatch = useDispatch();
  const { isLoadingUser } = useSelector(getAuthentication);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
        <ToastContainer autoClose={2000} />
      </Container>
    </div>
  );
}

export default App;
