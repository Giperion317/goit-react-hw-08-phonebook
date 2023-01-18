import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operation';
import { ToastContainer } from 'react-toastify';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from "./ContactList/ContactList";
import { GlobalStyle } from 'utils/GlobalStyles';




export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
      <>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
        <ToastContainer position="top-center" autoClose={3000} theme="colored"/>
        <GlobalStyle />
      </>
    );
}
