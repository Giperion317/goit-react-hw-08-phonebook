import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidateForm } from './ValidateForm';
import { StyleInput, Lable, FormButton } from './ContactForm.styled';
import styles from './Form.module.css';


export const ContactForm = ({ onSabmit }) => (
  <Formik
    initialValues={{ name: '', number: '' }}
    validationSchema={ValidateForm}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      onSabmit(values);
      values = { name: '', number: '' };
      resetForm();
      setSubmitting(false);
    }}
  >
    <Form className={styles.form}>
      <Lable>
        Name
        <Field as={StyleInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Lable>
      <ErrorMessage name="name" />
      <Lable>
        Number
        <Field as={StyleInput}
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
