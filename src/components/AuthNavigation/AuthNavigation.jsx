import { NavLink } from 'react-router-dom';
import { Link, List, ListItem } from '@chakra-ui/react';

export const AuthNavigation = () => {
  return (
    <List  display="flex" gap="4">
      <ListItem>
        <Link
          color="purple.800"
          _hover={{ color: 'pink.600' }}
          as={NavLink}
          to="register"
          fontFamily="cursive"
          fontSize="2xl"
          fontWeight="semibold"
        >
          SingUp
        </Link>
      </ListItem>
      <ListItem>
        <Link
          color="purple.800"
          _hover={{ color: 'pink.600' }}
          as={NavLink}
          to="login"
          fontFamily="cursive"
          fontSize="2xl"
          fontWeight="semibold"
        >
          Login
        </Link>
      </ListItem>
    </List>
  );
};
