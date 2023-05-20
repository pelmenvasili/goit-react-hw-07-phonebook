import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/operations';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.contact}>
      <span className={css.contactName}>{name}:</span> {number}
      <button
        type="button"
        onClick={() => dispatch(removeContact(id))}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
