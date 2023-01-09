import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { Item, Paragraph, Span, Button } from "./ContactList.styled"

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch()
  return (
  <Item key={id}>
    <Paragraph>
      {name}:<Span>{number}</Span>
    </Paragraph>
    <Button type="button" onClick={() => {dispatch(deleteContact(id))}}>
      Delete
    </Button>
  </Item>)}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}