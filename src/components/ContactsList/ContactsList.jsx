import { Container, List } from './ContactsList.styled';
import { ContactListItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactList = ({ contactsState, contactsFiltred, deleteItem }) => {
  const contacts = contactsFiltred.length > 0 ? contactsFiltred : contactsState;

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
