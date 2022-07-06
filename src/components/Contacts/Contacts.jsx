import { ContactsContainer, Title } from './Contacts.styled';

export const Contacts = ({ items }) => {
  console.log(items);
  return (
    <ContactsContainer>
      <Title>Contacts</Title>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}
          </li>
        ))}
      </ul>
    </ContactsContainer>
  );
};
