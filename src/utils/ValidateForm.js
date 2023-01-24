import * as Yup from 'yup';
import { toast } from 'react-toastify';

export const ValidateForm = Yup.object({
  name: Yup.string()
    .max(20, () => toast.warn('Must be 20 characters or less'))
    .required('Required'),
  phone: Yup.string()
    .max(12, () => toast.warn('Must be 12 digits or less'))
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, () => toast.warn('Must be 12 digits or less'))
    .required('Required'),
});
