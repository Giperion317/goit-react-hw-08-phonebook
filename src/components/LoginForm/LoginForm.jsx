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
  useToast,
} from '@chakra-ui/react';
import { TbLogin } from 'react-icons/tb';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ValidateLoginForm}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(login(values)).then(({ error }) => {
          if (error) {
            toast({
              position: 'top',
              title: 'Incorrect email or password, please try again!',
              status: 'error',
              isClosable: true,
            });
            return;
          }
          toast({
            position: 'top',
            title: `Congratulations, you are logged in!`,
            status: 'success',
            isClosable: true,
          });
        });
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
