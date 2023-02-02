import { useDispatch } from 'react-redux';
import { login } from 'redux/auht/auth-operations';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidateLoginForm } from '../../utils/ValidateForm';
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
} from '@chakra-ui/react';
import { TbLogin } from 'react-icons/tb';

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
      <Box p={2}>
        <Box textAlign="center">
          <Heading
            fontFamily="cursive"
            fontSize="2xl"
            fontWeight="semibold"
            color="purple.800"
          >
            Login
          </Heading>
        </Box>
        <Box my={4} textAlign="left">
          <FormControl as={Form}>
            <FormLabel
              fontFamily="cursive"
              fontSize="md"
              fontWeight="semibold"
              color="purple.800"
            >
              Email:
              <Input
                as={Field}
                focusBorderColor="purple.400"
                errorBorderColor="crimson"
                bg="blackAlpha.100"
                type="email"
                name="email"
              />
            </FormLabel>
            <ErrorMessage name="email" />
            <FormLabel
              mt={6}
              fontFamily="cursive"
              fontSize="md"
              fontWeight="semibold"
              color="purple.800"
            >
              Password:
              <Input
                as={Field}
                focusBorderColor="purple.400"
                errorBorderColor="crimson"
                bg="blackAlpha.100"
                type="password"
                name="password"
              />
            </FormLabel>
            <ErrorMessage name="pasword" />
            <Button
              type="submit"
              leftIcon={<TbLogin />}
              colorScheme="purple"
              variant="solid"
              width="full"
              mt={4}
            >
              Sign In
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Formik>
  );
};
