import { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
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

  const getVisibleContatcts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  }

  const addContact = (data) => {
    const newContact = { ...data, id: nanoid() }
    const nameMatch = contacts.find(({name}) => {
          return (
        name.toLowerCase() === newContact.name.toLowerCase());
    });
    nameMatch
      ? toast.warn(`${newContact.name} is alredy in contacts!`)
      : setContacts(prevContact =>  [...prevContact, newContact]);
  }

    const deleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(({id})=> id !== contactId))
  }

  return (
      <>
        <h1>Ponebook</h1>
        <ContactForm onSabmit={addContact}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={chengeFilter} />
        <ContactList contacts={getVisibleContatcts()} deleteContact={deleteContact} />
        <ToastContainer position="top-center" autoClose={3000} theme="colored"/>
        <GlobalStyle />
      </>
    );
}
