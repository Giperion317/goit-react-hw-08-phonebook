import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contacts/contactsSlice';
import { Item, Paragraph, Phone, Button } from "./ContactList.styled"

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch()
  return (
  <Item key={id}>
    <Paragraph>
      {name}:
      </Paragraph>
      <Phone>{phone}</Phone>
    <Button type="button" onClick={() => {dispatch()}}>
      Delete
    </Button>
  </Item>)}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}