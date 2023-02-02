import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box, Flex } from '@chakra-ui/react';

export const LoginPage = () => {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        bg="purple.200"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <LoginForm />
      </Box>
    </Flex>
  );
};
