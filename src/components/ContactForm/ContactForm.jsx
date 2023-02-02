import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selector';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operation';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidateContactForm } from '../../utils/ValidateForm';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  useToast,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const toast = useToast()
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ValidateContactForm}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const nameMatch = contacts.find(({ name }) => {
          return name.toLowerCase() === values.name.toLowerCase();
        });
        nameMatch
          ? toast({
              position: 'top',
              title: `${values.name} is already in contacts!`,
              status: 'warning',
              isClosable: true,
            })
          : dispatch(addContact(values));
        values = { name: '', number: '' };
        resetForm();
        setSubmitting(false);
      }}
    >
      <Box p={2}>
        <Box my={4} textAlign="left">
          <FormControl as={Form}>
            <FormLabel
              fontFamily="cursive"
              fontSize="md"
              fontWeight="semibold"
              color="purple.800"
            >
              Name:
              <Input
                as={Field}
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
            <FormLabel
              mt={6}
              fontFamily="cursive"
              fontSize="md"
              fontWeight="semibold"
              color="purple.800"
            >
              Number:
              <Input
                as={Field}
                focusBorderColor="purple.400"
                errorBorderColor="crimson"
                bg="blackAlpha.100"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
            </FormLabel>
            <ErrorMessage name="number" />
            <Button
              type="submit"
              colorScheme="purple"
              variant="solid"
              width="full"
              mt={4}
            >
              Add Contact
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Formik>
  );
};
