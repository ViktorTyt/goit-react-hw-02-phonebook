// import PropTypes from 'prop-types';
// import { Container, List } from './ContactsList.styled';
// import { ContactListItem } from 'components/ContactsListItem/ContactsListItem';

// export const ContactList = ({
//   filter,
//   contactsState,
//   makeFilter,
//   deleteItem,
// }) => {
//   const contacts = filter ? makeFilter() : contactsState;
//   // console.log(makeFilter);

//   return (
//     <Container>
//       <List>
//         {contacts.map(contact => (
//           <ContactListItem
//             key={contact.id}
//             name={contact.name}
//             number={contact.number}
//             deleteItem={deleteItem}
//           />
//         ))}
//       </List>
//     </Container>
//   );
// };

// ContactList.propTypes = {
//   filter: PropTypes.string.isRequired,
//   contactsState: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   contactsFiltred: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteItem: PropTypes.func,
// };

// =================================================

import PropTypes from 'prop-types';
import { Container, List } from './ContactsList.styled';
import { ContactListItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactList = ({
  filter,
  contactsState,
  getFiltred,
  deleteItem,
}) => {
  const contacts = filter ? getFiltred() : contactsState;

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
  getFiltred: PropTypes.func,
  deleteItem: PropTypes.func,
};
