import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';
import { ContactItem } from "./ContactItem"
import { List } from "./ContactList.styled"

export const ContactList = () => {
   const contacts = useSelector(getContacts)
    return (
    <List>
      {contacts.map((contact) => ContactItem(contact))}
    </List>)
}
