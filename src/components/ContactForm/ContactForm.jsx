import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidateForm } from './ValidateForm';

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
    <Form>
      <label>
        Name
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </label>
      <ErrorMessage name="name" />
      <label>
        Number
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </label>
      <ErrorMessage name="number" />
      <button type="submit">Add Contact</button>
    </Form>
  </Formik>
);
