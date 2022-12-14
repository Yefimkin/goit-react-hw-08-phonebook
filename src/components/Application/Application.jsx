import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import style from './Application.module.css';

const Application = () => {
  return (
    <div className={style.divContainer}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={style.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Application;
