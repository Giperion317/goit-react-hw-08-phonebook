import * as Yup from 'yup';

export const ValidateForm = Yup.object({
      name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      number: Yup.string()
        .max(12, 'Must be 12 digits or less')
        .required('Required'),
    })
