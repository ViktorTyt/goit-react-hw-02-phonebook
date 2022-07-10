import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import { Container, MainTitle, SectionTitle, Message } from 'App/App.styled';

export class App extends Component {
  state = {
    contacts: [],
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

  handleDeleteItem = id => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.handleFormSubmit} />
        <SectionTitle>Contacts</SectionTitle>
        {contacts.length > 1 && (
          <Filter
            filter={filter}
            onFilterChange={this.handleFilterInputChange}
          />
        )}
        {contacts.length > 0 ? (
          <ContactList
            contactsState={contacts}
            filter={filter}
            getFiltred={this.showContact}
            deleteItem={this.handleDeleteItem}
          />
        ) : (
          <Message>Your Phonebook is empty</Message>
        )}
      </Container>
    );
  }
}
