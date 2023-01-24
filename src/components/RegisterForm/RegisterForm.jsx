import { useDispatch } from 'react-redux';
import { register } from 'redux/auht/auth-operations';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidateRegisterForm } from '../../utils/ValidateForm';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={ValidateRegisterForm}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(register(values));
        resetForm();
        setSubmitting(false);
      }}
    >
      <Form>
        <label>
          Name:
          <Field type="text" name="name" />
        </label>
        <ErrorMessage name="name" />
        <label>
          Email:
          <Field type="email" name="email" />
        </label>
        <ErrorMessage name="email" />
        <label>
          Password:
          <Field type="password" name="password" />
        </label>
        <ErrorMessage name="pasword" />
        <button type="submit">Sing Up</button>
      </Form>
    </Formik>
  );
};
