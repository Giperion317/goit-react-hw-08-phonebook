import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auht/auth-operations';
import { selectEmail } from 'redux/auht/auth-selector';
import { Flex, Text, IconButton } from '@chakra-ui/react';
import { TbLogout } from 'react-icons/tb';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  return (
    <Flex gap="2" alignItems="center">
      <Text
        fontFamily="cursive"
        fontSize="xl"
        fontWeight="semibold"
        color="purple.800"
      >
        Welcome,{email}
      </Text>
      <IconButton
        aria-label="logout"
        icon={<TbLogout size="30px" />}
        color="purple.800"
        _hover={{ color: 'pink.600' }}
        variant="outline"
        border="none"
        onClick={() => dispatch(logout())}
      />
    </Flex>
  );
};
