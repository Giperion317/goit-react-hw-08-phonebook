import * as Yup from 'yup';
import { toast } from 'react-toastify';

export const ValidateContactForm = Yup.object({
  name: Yup.string()
    .max(20, () => toast.warn('Must be 20 characters or less'))
    .required('Required'),
  number: Yup.string()
    .max(12, () => toast.warn('Must be 12 digits or less'))
    .required('Required'),
});

export const ValidateRegisterForm = Yup.object({
  name: Yup.string()
    .max(20, () => toast.warn('Must be 20 characters or less'))
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

export const ValidateLoginForm = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});
