import { RegisterForm } from "components/RegisterForm/RegisterForm"
import { Box, Flex } from "@chakra-ui/react"

export const RegisterPage = () => {
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
        <RegisterForm/>
      </Box>
    </Flex>
  );
}

export default RegisterPage;