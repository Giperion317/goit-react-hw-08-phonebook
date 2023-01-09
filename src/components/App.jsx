import { ToastContainer} from 'react-toastify';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from "./ContactList/ContactList";
import { GlobalStyle } from 'utils/GlobalStyles';

export const App = () => {
  return (
      <>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
        <ToastContainer position="top-center" autoClose={3000} theme="colored"/>
        <GlobalStyle />
      </>
    );
}
