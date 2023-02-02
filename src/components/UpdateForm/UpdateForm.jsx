import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operation';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidateContactForm } from '../../utils/ValidateForm';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';

export const UpdateForm = ({ userToUpdate, clousForm }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: userToUpdate.name, number: userToUpdate.number }}
      validationSchema={ValidateContactForm}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(updateContact({...userToUpdate, ...values}))
        resetForm();
        setSubmitting(false);
        clousForm();
      }}
    >
      <FormControl as={Form}>
        <FormLabel fontFamily="cursive"
              fontSize="md"
              fontWeight="semibold"
              color="purple.800">
          Name:
          <Input as={Field}
            focusBorderColor="purple.400"
                errorBorderColor="crimson"
                bg="blackAlpha.100"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </FormLabel>
        <ErrorMessage name="name" />
        <FormLabel fontFamily="cursive"
              fontSize="md"
              fontWeight="semibold"
              color="purple.800">
          Number:
          <Input as={Field}
            focusBorderColor="purple.400"
                errorBorderColor="crimson"
                bg="blackAlpha.100"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </FormLabel>
        <ErrorMessage name="name" />
        <Button
              leftIcon={<FaEdit />}
              colorScheme="purple"
              variant="solid"
              mt={2} type="submit">Update</Button>
      </FormControl>
    </Formik>
  );
};
