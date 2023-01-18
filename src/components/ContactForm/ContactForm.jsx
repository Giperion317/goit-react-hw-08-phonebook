import styles from './Form.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';
import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contacts/contactsSlice';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidateForm } from './ValidateForm';
import { StyleInput, Lable, FormButton } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ValidateForm}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const newContact = { ...values, id: nanoid() };
        const nameMatch = contacts.find(({ name }) => {
          return name.toLowerCase() === newContact.name.toLowerCase();
        });
        nameMatch
          ? toast.warn(`${newContact.name} is alredy in contacts!`)
          : dispatch();
        values = { name: '', number: '' };
        resetForm();
        setSubmitting(false);
      }}
    >
      <Form className={styles.form}>
        <Lable>
          Name
          <Field
            as={StyleInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </Lable>
        <ErrorMessage name="name" />
        <Lable>
          Number
          <Field
            as={StyleInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </Lable>
        <ErrorMessage name="number" />
        <FormButton type="submit">Add Contact</FormButton>
      </Form>
    </Formik>
  );
};
