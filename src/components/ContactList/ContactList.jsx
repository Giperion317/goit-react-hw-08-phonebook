import { ContactItem } from "./ContactItem"

export const ContactList = ({ contacts, deleteContact }) => (
    <ul>
        {contacts.map((contact) => ContactItem(contact, deleteContact))}
    </ul>
)