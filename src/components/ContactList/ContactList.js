import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getSortedContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getSortedContacts);

  return (
    <ul className={css.contactList}>
      {contacts.length !== 0 ? (
        contacts.map(({ id, name, number, phone }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number || phone}
            id={id}
          />
        ))
      ) : (
        <p>No contact found with that name</p>
      )}
    </ul>
  );
};

export default ContactList;
