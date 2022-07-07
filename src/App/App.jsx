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
    if (this.state.contacts.find(contacts => contacts.name === data.name)) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prev => {
        return {
          contacts: [
            ...prev.contacts,
            { id: nanoid(), name: data.name, number: data.number },
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
    return (this.contactsFiltred = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    ));
  };

  handleDeleteItem = e => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.name !== e.currentTarget.id
      ),
    });

    this.contactsFiltred = this.contactsFiltred.filter(
      contact => contact.name !== e.currentTarget.id
    );
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
