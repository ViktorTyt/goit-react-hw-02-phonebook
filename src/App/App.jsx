// import { Component } from 'react';
// import { nanoid } from 'nanoid';

// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactsList/ContactsList';
// import { Filter } from 'components/Filter/Filter';

// import { Container, MainTitle, SectionTitle } from 'App/App.styled';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   // contactsFiltred = [];

//   handleFormSubmit = data => {
//     const { contacts } = this.state;
//     const { name, number } = data;

//     if (
//       contacts.find(
//         contacts => contacts.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       alert(`${name} is already in contacts`);
//     } else {
//       this.setState(prev => {
//         return {
//           contacts: [
//             ...prev.contacts,
//             { id: nanoid(), name: name, number: number },
//           ],
//         };
//       });
//     }
//   };

//   handleFilterInputChange = filter => {
//     // const { name, value } = e.currentTarget;

//     this.setState({
//       filter,
//     });

//     // this.handleFilter(value);
//   };

//   // handleFilter = searchValue => {
//   //   const { contacts } = this.state;
//   //   return console.log(
//   //     contacts.filter(contact => contact.name.includes(searchValue))
//   //   );
//   //   this.setState(prevState => {
//   //     return {
//   //       contacts: prevState.contacts.filter(contact => console.log(contact)),
//   //     };
//   //   });
//   // };
//   showContact = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   };
//   handleDeleteItem = e => {
//     const { contacts } = this.state;
//     const { id } = e.currentTarget;

//     this.setState({
//       contacts: contacts.filter(contact => contact.name !== id),
//     });

//     return (this.contactsFiltred = this.contactsFiltred.filter(
//       contact => contact.name !== id
//     ));
//   };

//   render() {
//     return (
//       <Container>
//         <MainTitle>Phonebook</MainTitle>
//         <ContactForm onSubmit={this.handleFormSubmit} />
//         <SectionTitle>Contacts</SectionTitle>
//         <Filter
//           filter={this.state.filter}
//           contactsState={this.state.contacts}
//           onFilterChange={this.handleFilterInputChange}
//         />
//         <ContactList
//           contactsState={this.state.contacts}
//           filter={this.state.filter}
//           makeFilter={this.showContact}
//           contactsFiltred={this.contactsFiltred}
//           deleteItem={this.handleDeleteItem}
//         />
//       </Container>
//     );
//   }
// }

// =========================================
import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import { Container, MainTitle, SectionTitle, Message } from 'App/App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = data => {
    const { contacts } = this.state;
    const { name, number } = data;
    const normalizedName = name.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prev => {
        return {
          contacts: [
            ...prev.contacts,
            { id: nanoid(), name: name, number: number },
          ],
        };
      });
    }
  };

  handleFilterInputChange = filter => {
    this.setState({
      filter,
    });
  };

  showContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDeleteItem = e => {
    const { contacts } = this.state;
    const { id } = e.currentTarget;

    this.setState({
      contacts: contacts.filter(({ name }) => name !== id),
    });
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.handleFormSubmit} />
        <SectionTitle>Contacts</SectionTitle>
        {contacts.length > 0 ? (
          <Filter
            filter={filter}
            onFilterChange={this.handleFilterInputChange}
          />
        ) : (
          <Message>Your Phonebook is empty</Message>
        )}
        <ContactList
          contactsState={contacts}
          filter={filter}
          getFiltred={this.showContact}
          deleteItem={this.handleDeleteItem}
        />
      </Container>
    );
  }
}
