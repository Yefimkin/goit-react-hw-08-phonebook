import React from 'react';

import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './Filter/Filter';

function App() {
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
