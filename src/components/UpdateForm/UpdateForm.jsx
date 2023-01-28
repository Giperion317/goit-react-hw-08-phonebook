import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operation';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidateContactForm } from '../../utils/ValidateForm';

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
      <Form>
        <label>
          Name:
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
        <ErrorMessage name="name" />
        <lable>
          Number:
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </lable>
        <ErrorMessage name="name" />
        <button type="submit">Update</button>
      </Form>
    </Formik>
  );
};
