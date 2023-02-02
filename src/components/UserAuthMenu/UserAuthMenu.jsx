import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auht/auth-operations';
import { selectName } from 'redux/auht/auth-selector';
import { Avatar, Flex, Text, IconButton } from '@chakra-ui/react';
import { TbLogout } from 'react-icons/tb';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <Flex gap="2" alignItems="center">
      <Avatar name={name} size='sm'/>
      <Text
        fontFamily="cursive"
        fontSize="xl"
        fontWeight="semibold"
        color="purple.800"
      >
        {name}
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
