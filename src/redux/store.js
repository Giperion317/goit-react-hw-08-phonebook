import contactsReducer from './contacts/contactsSlice';
import filterReduser from './filter/filterSlise';
import authReduser from './auht/authSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReduser,
    auth: authReduser,
  },
});
