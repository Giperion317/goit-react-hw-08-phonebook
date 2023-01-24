import { useDispatch } from 'react-redux';
import { login } from 'redux/auht/auth-operations';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidateLoginForm } from '../../utils/ValidateForm';

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ValidateLoginForm}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(login(values));
        resetForm();
        setSubmitting(false);
      }}
    >
      <Form>
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
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};
