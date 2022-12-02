import { Component } from 'react';
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from "./ContactList/ContactList";
import { GlobalStyle } from 'utils/GlobalStyles';

export class App extends Component {
  state = {
  contacts: [],
  filter: ''
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts) {
      this.setState({contacts: JSON.parse(savedContacts)})
    }
  }

  componentDidUpdate(_, prevState) {
    const {contacts} = this.state
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }

  chengeFilter = (event) => {
    this.setState({filter:event.target.value})
  }

  getVisibleContatcts = () => {
    const {contacts} = this.state
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  }

  addContact = (data) => {
    const {contacts} = this.state
    const newContact = { ...data, id: nanoid() }
    const nameMatch = contacts.find(({name}) => {
          return (
        name.toLowerCase() === newContact.name.toLowerCase());
    });

    nameMatch
      ? toast.warn(`${newContact.name} is alredy in contacts!`)
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
    const {filter} = this.state
    const visebleContacts = this.getVisibleContatcts();
    return (
      <>
        <h1>Ponebook</h1>
        <ContactForm onSabmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.chengeFilter} />
        <ContactList contacts={visebleContacts} deleteContact={this.deleteContact} />
        <ToastContainer position="top-center" autoClose={3000} theme="colored"/>
        <GlobalStyle />
      </>
    );
  }
}
