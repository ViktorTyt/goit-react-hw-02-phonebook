import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import { Container, MainTitle, SectionTitle } from 'App/App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  contactsFiltred = [];

  handleFormSubmit = data => {
    const { contacts } = this.state;
    const { name, number } = data;

    if (
      contacts.find(
        contacts => contacts.name.toLowerCase() === name.toLowerCase()
      )
    ) {
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

  handleFilterInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });

    this.handleFilter(value);
  };

  handleFilter = searchValue => {
    const { contacts } = this.state;

    return (this.contactsFiltred = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    ));
  };

  handleDeleteItem = e => {
    const { contacts } = this.state;
    const { id } = e.currentTarget;

    this.setState({
      contacts: contacts.filter(contact => contact.name !== id),
    });

    return (this.contactsFiltred = this.contactsFiltred.filter(
      contact => contact.name !== id
    ));
  };

  render() {
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.handleFormSubmit} />
        <SectionTitle>Contacts</SectionTitle>
        <Filter
          filter={this.state.filter}
          contactsState={this.state.contacts}
          onFilterChange={this.handleFilterInputChange}
        />
        <ContactList
          contactsState={this.state.contacts}
          filter={this.state.filter}
          contactsFiltred={this.contactsFiltred}
          deleteItem={this.handleDeleteItem}
        />
      </Container>
    );
  }
}
