import PropTypes from 'prop-types';
import { Container, List } from './ContactsList.styled';
import { ContactListItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactList = ({
  filter,
  contactsState,
  contactsFiltred,
  deleteItem,
}) => {
  const contacts = filter ? contactsFiltred : contactsState;

  return (
    <Container>
      <List>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            deleteItem={deleteItem}
          />
        ))}
      </List>
    </Container>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contactsState: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  contactsFiltred: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteItem: PropTypes.func,
};
