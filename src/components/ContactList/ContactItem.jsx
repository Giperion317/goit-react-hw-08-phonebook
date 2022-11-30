import PropTypes from 'prop-types';
import { Item, Paragraph, Span, Button } from "./ContactList.styled"

export const ContactItem = ({ id, name, number }, deleteContact) => (
  <Item key={id}>
    <Paragraph>
      {name}:<Span>{number}</Span>
    </Paragraph>
    <Button type="button" onClick={() => deleteContact(id)}>
      Delete
    </Button>
  </Item>)

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
}