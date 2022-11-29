import { Component } from 'react';
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
  contacts: [],
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
        </>
    );
  }
}
