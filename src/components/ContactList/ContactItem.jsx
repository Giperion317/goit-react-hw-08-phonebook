import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operation';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';
import { Item, Paragraph, Phone, Button } from './ContactList.styled';

export const ContactItem = (
  { id, name, number },
  showUpdateForm,
  userToUpdate,
  clousForm
) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <Paragraph>{name}:</Paragraph>
      <Phone>{number}</Phone>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
      <Button type="button" onClick={() => showUpdateForm(id)}>
        Update
      </Button>
      {userToUpdate && userToUpdate.id === id && (
        <UpdateForm userToUpdate={userToUpdate} clousForm={clousForm} />
      )}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  showUpdateForm: PropTypes.func.isRequired,
  userToUpdate: PropTypes.func.isRequired,
  clousForm: PropTypes.func.isRequired,
}
