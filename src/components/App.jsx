import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contacts/contacts-selector';
import { selectToken } from 'redux/auht/auth-selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operation';
import { ToastContainer } from 'react-toastify';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
import { UserAuthMenu } from './UserAuthMenu/UserAuthMenu';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from 'utils/GlobalStyles';
import { MutatingDots } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const token = useSelector(selectToken);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, token]);

  return (
    <>
      <UserAuthMenu/>
      <RegisterForm />
      <LoginForm/>
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
      <GlobalStyle />
    </>
  );
};
