import { Component } from 'react';
import { nanoid } from 'nanoid';

import { InputSection } from 'components/InputSection/InputSection';
import { ContactList } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/InputSection/InputSection.styled';

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
    console.log(data);
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

  handleFilterChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
    this.handlefilter(e.currentTarget.value);
  };

  filtred = [];

  handlefilter = searchValue => {
    return (this.filtred = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    ));
  };

  handleDeleteItem = e => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.name !== e.currentTarget.id
      ),
    });

    this.filtred = this.filtred.filter(
      contact => contact.name !== e.currentTarget.id
    );
  };

  render() {
    console.log([this.filtred].name);
    return (
      <Container>
        <h1>Phonebook</h1>
        <InputSection onSubmit={this.handleFormSubmit} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onFilterChange={this.handleFilterChange}
        />
        <ContactList
          items={this.state.contacts}
          filtred={this.filtred}
          deleteItem={this.handleDeleteItem}
          onFilterChange={this.handleFilterChange}
        />
      </Container>
    );
  }
}
