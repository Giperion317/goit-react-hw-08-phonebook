import contactsReducer from './contacts/contactsSlice';
import filterReduser from './filter/filterSlise';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReduser,
  },
});
