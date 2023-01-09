import { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from "./ContactList/ContactList";
import { GlobalStyle } from 'utils/GlobalStyles';

export const App = () => {
  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')) ?? [])
  const [filter, setFilter] = useState('')
  

  useEffect(() => {
      window.localStorage.setItem('contacts', JSON.stringify(contacts))
     }, [contacts]);

  const chengeFilter = (event) => {
    setFilter(event.target.value)
  }

  // const getVisibleContatcts = () => {
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  // }

  return (
      <>
        <h1>Ponebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={chengeFilter} />
        <ContactList/>
        <ToastContainer position="top-center" autoClose={3000} theme="colored"/>
        <GlobalStyle />
      </>
    );
}
