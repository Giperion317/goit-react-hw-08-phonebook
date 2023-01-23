import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operation';

import { Item, Paragraph, Phone, Button } from "./ContactList.styled"

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch()
  return (
  <Item key={id}>
    <Paragraph>
      {name}:
      </Paragraph>
      <Phone>{number}</Phone>
    <Button type="button" onClick={() => dispatch(deleteContact(id))}>
      Delete
    </Button>
  </Item>)}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}