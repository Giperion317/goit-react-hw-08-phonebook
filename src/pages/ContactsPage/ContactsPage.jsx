import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contacts-selector';
import { selectToken } from 'redux/auht/auth-selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operation';
import { ContactForm } from 'components/ContactForm/ContactForm'; 
import { Filter } from 'components/Filter/Filter'; 
import { ContactList } from 'components/ContactList/ContactList'; 
import { Box, Flex, Spinner } from '@chakra-ui/react';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const token = useSelector(selectToken);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, token]);

  return (
<>
<Flex width="full" align="center" justifyContent="center" flexDirection='column'>
      <Box
        p={8}
        maxWidth="400px"
        bg="purple.200"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
      <ContactForm />
        </Box>
           
      <Filter />
      {isLoading && <Spinner color="purple.800" size='xl' />}
        {!isLoading && token && <ContactList />}
        </Flex>
     </>
  );
};