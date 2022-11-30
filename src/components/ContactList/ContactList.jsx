import PropTypes from 'prop-types';
import { ContactItem } from "./ContactItem"
import { List } from "./ContactList.styled"

export const ContactList = ({ contacts, deleteContact }) => (
    <List>
        {contacts.map((contact) => ContactItem(contact, deleteContact))}
    </List>
)

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
}