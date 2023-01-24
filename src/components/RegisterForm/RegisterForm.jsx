import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auht/auth-operations';
import { toast } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidateForm } from '../../utils/ValidateForm';

export const RegisterForm = () => {
  //   const contacts = useSelector(getContacts);
  //   const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', email: '', password:'' }}
      validationSchema={ValidateForm}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        resetForm();
        setSubmitting(false);
      }}
    >
      <Form>
        <lable>
          Name:
          <Field type="text" name="name" />
        </lable>
        <ErrorMessage name="name" />
        <lable>
          Email:
          <Field type="email" name="email" />
        </lable>
        <ErrorMessage name="email" />
        <lable>
          Password:
          <Field
            type="password"
            name="password"
          />
        </lable>
        <ErrorMessage name="pasword" />
        <FormButton type="submit">Register</FormButton>
      </Form>
    </Formik>
  );
};
