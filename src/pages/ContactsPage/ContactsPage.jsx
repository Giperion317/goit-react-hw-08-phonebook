import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contacts-selector';
import { selectToken } from 'redux/auht/auth-selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operation';
import { ToastContainer } from 'react-toastify';
import { ContactForm } from 'components/ContactForm/ContactForm'; 
import { Filter } from 'components/Filter/Filter'; 
import { ContactList } from 'components/ContactList/ContactList'; 
import { MutatingDots } from 'react-loader-spinner';



export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const token = useSelector(selectToken);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, token]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
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
      <ToastContainer position="top-center" autoClose={3000} theme="colored" limit={1}/>
    </>
  );
};