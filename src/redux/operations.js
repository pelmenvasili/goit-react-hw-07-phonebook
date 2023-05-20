import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, removeContact } from 'services/services';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await getContacts();
  return response;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await postContact(contact);
    return response;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await removeContact(id);
    return response;
  }
);
