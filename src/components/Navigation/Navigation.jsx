import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auht/auth-selector';
import { Link, List, ListItem } from '@chakra-ui/react';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <List>
        {token ? (
          <ListItem>
            <Link
              color="purple.800"
              _hover={{ color: 'pink.600' }}
              as={NavLink}
              to="contacts"
              fontFamily="cursive"
              fontSize="2xl"
              fontWeight="semibold"
            >
              Contacts
            </Link>
          </ListItem>
        ) : (
          <ListItem>
            <Link
              color="purple.800"
              _hover={{ color: 'pink.600' }}
              as={NavLink}
              to="/"
              fontFamily="cursive"
              fontSize="2xl"
              fontWeight="semibold"
            >
              Home
            </Link>
          </ListItem>
        )}
      </List>
    </nav>
  );
};
