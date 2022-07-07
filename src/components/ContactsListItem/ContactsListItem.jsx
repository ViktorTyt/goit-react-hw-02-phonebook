import PropTypes from 'prop-types';
import { ContactItem, DeleteButton } from './ContactsListItem.styled';

export const ContactListItem = ({ name, number, deleteItem }) => {
  return (
    <ContactItem>
      • {name}: {number}{' '}
      <DeleteButton id={name} type="button" onClick={deleteItem}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
};
