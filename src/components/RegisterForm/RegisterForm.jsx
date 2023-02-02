import { useDispatch } from 'react-redux';
import { register } from 'redux/auht/auth-operations';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ValidateRegisterForm } from '../../utils/ValidateForm';
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
} from '@chakra-ui/react';
import { GiArchiveRegister } from 'react-icons/gi';

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
      <Box p={2}>
        <Box textAlign="center">
          <Heading
            fontFamily="cursive"
            fontSize="2xl"
            fontWeight="semibold"
            color="purple.800"
          >
            Register
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
              Name:
              <Input
                as={Field}
                focusBorderColor="purple.400"
                errorBorderColor="crimson"
                bg="blackAlpha.100"
                type="text"
                name="name"
              />
            </FormLabel>
            <ErrorMessage name="name" />
            <FormLabel
              fontFamily="cursive"
              fontSize="md"
              fontWeight="semibold"
              color="purple.800"
              mt={6}
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
              fontFamily="cursive"
              fontSize="md"
              fontWeight="semibold"
              color="purple.800"
              mt={6}
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
              leftIcon={<GiArchiveRegister />}
              colorScheme="purple"
              variant="solid"
              width="full"
              mt={4}
            >
              Sing Up
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Formik>
  );
};
