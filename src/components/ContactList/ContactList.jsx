import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';
import { ContactItem } from './ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
 const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const visibleContacts = getVisibleContatcts()
  function getVisibleContatcts() {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  }
    return (
      <List>
        {contacts.length>0 && visibleContacts.map((contact) => ContactItem(contact))}
    </List>)
}
