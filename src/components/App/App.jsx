import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './App.module.css';
import { getContacts } from 'redux/operations';
import Loader from 'components/Loader/Loader';
import { selectError, selectIsLoading, selectItems } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const contacts = useSelector(selectItems) || [];

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contactsTitle}>Contacts</h2>
      {isError ? (
        <p>{isError.message}</p>
      ) : loading ? (
        <Loader />
      ) : contacts.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>There are no contacts yet</p>
      )}
    </div>
  );
};

export default App;
