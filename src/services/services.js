import axios from 'axios';

const URL = 'https://64662dda9c09d77a62ff6e2a.mockapi.io/contacts';

export const fetchContacts = async () => {
  try {
    const contacts = await axios.get(URL);
    return contacts.data;
  } catch (error) {
    console.log(error);
  }
};

export const addContact = async contact => {
  try {
    const contacts = await axios.post(URL, contact);
    return contacts.data;
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

export const deleteContact = async id => {
  try {
    await axios.delete(`${URL}/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
};
