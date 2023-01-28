import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'redux/contacts/contacts-selector';
import { selectFilter } from 'redux/filter/filter-selector';
import { ContactItem } from './ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const [userToUpdate, setUserToUpdate] = useState(null)
 const contacts = useSelector(selectContacts)
  const filter = useSelector(selectFilter)
  const visibleContacts = getVisibleContatcts()
  function getVisibleContatcts() {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  }
  const showUpdateForm = (userId) => {
    const contact = contacts.find(({ id }) => id === userId)
    setUserToUpdate(contact)
  }
  const clousForm = () => {
    setUserToUpdate(null)
  }

    return (
      <List>
        {contacts.length>0 && visibleContacts.map((contact) => (ContactItem(contact, showUpdateForm, userToUpdate, clousForm)))}
    </List>)
}
