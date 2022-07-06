import { ContactsContainer, List } from './Contacts.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ items, filtred, deleteItem, onFilterChange }) => {
  console.log(items);
  return (
    <ContactsContainer>
      <List>
        {filtred.length > 0
          ? filtred.map(item => (
              <ContactItem
                key={item.id}
                name={item.name}
                number={item.number}
                deleteItem={deleteItem}
              />
            ))
          : items.map(item => (
              <ContactItem
                key={item.id}
                name={item.name}
                number={item.number}
                deleteItem={deleteItem}
              />
            ))}
      </List>
    </ContactsContainer>
  );
};
