import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contacts-selector';
import { selectToken } from 'redux/auht/auth-selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operation';
import { ContactForm } from 'components/ContactForm/ContactForm'; 
import { Filter } from 'components/Filter/Filter'; 
import { ContactList } from 'components/ContactList/ContactList'; 
import { MutatingDots } from 'react-loader-spinner';
import { Box, Flex } from '@chakra-ui/react';

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
        maxWidth="500px"
        bg="purple.200"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
      <ContactForm />
        </Box>
           
      <Filter />
      {isLoading && (
        <MutatingDots
          height="100"
          width="100"
          color='#205d5c'
          secondaryColor='#205d5c'
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
        {!isLoading && token && <ContactList />}
        </Flex>
     </>
  );
};