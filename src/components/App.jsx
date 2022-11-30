import { Component } from 'react';
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from "./ContactList/ContactList";
import { GlobalStyle } from 'utils/GlobalStyles';

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
  }

  chengeFilter = (event) => {
    this.setState({filter:event.target.value})
  }

  getVisibleContatcts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  }

  addContact = (data) => {
    const newContact = { ...data, id: nanoid() }
    const nameMatch = this.state.contacts.find(({name}) => {
          return (
        name.toLowerCase() === newContact.name.toLowerCase());
    });

    nameMatch
      ? window.alert(`${newContact.name} is alredy in contacts!`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
    
  }

  deleteContact = (contactId) => {
    this.setState(prevState => (
      {contacts: prevState.contacts.filter(({id})=> id !== contactId)}
    ))
    
  }

  render() {
    const visebleContacts = this.getVisibleContatcts();
    return (
      <>
        <h1>Ponebook</h1>
        <ContactForm onSabmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.chengeFilter} />
        <ContactList contacts={visebleContacts} deleteContact={this.deleteContact} />
        <GlobalStyle/>
      </>
    );
  }
}
