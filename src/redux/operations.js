import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'services/services';

export const getContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await fetchContacts();
  return response;
});

export const postContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await addContact(contact);
    return response;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await deleteContact(id);
    return response;
  }
);
