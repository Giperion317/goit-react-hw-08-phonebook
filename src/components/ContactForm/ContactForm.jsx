import styles from './Form.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operation';
import { toast } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidateForm } from './ValidateForm';
import { StyleInput, Lable, FormButton } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={ValidateForm}
      onSubmit={(values, { setSubmitting, resetForm }) => {
          const nameMatch = contacts.find(({ name }) => {
          return name.toLowerCase() === values.name.toLowerCase();
        });
        nameMatch
          ? toast.warn(`${values.name} is alredy in contacts!`)
          : dispatch(addContact(values));
        values = { name: '', phone: '' };
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
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </Lable>
        <ErrorMessage name="phone" />
        <FormButton type="submit">Add Contact</FormButton>
      </Form>
    </Formik>
  );
};
