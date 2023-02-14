import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../features/Contacts/ContactsSlice';
import filterReducer from '../features/Filter/FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
  },
});
