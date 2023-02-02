import { useNavigate } from 'react-router-dom';
import { Text, Button } from '@chakra-ui/react';
import { GiArchiveRegister } from 'react-icons/gi';
import { TbLogin } from 'react-icons/tb';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Text
        us="p"
        fontFamily="cursive"
        fontSize="3xl"
        color="purple.600"
        mb="3"
      >
        Welcom to Phonebook App!
      </Text>
      <Text
        us="p"
        fontFamily="cursive"
        fontSize="2xl"
        color="purple.600"
        mb="3"
      >
        Please register
      </Text>
      <Button
        leftIcon={<GiArchiveRegister />}
        colorScheme="purple"
        variant="solid"
        mb="3"
        onClick={() => {
          navigate('register');
        }}
      >
        Sing up
      </Button>
      <Text
        us="p"
        fontFamily="cursive"
        fontSize="2xl"
        color="purple.600"
        mb="3"
      >
        or login App
      </Text>
      <Button
        leftIcon={<TbLogin />}
        colorScheme="purple"
        variant="solid"
        mb="3"
        onClick={() => {
          navigate('login');
        }}
      >
        Login
      </Button>
    </>
  );
};
