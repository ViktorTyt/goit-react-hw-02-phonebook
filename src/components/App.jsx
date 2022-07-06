import { Component } from 'react';
import { nanoid } from 'nanoid';

import { InputSection } from 'components/InputSection/InputSection';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleFormSubmit = data => {
    console.log(data);
    this.setState(prev => {
      return {
        contacts: [
          ...prev.contacts,
          { id: nanoid(), name: data.name, number: data.number },
        ],
      };
    });
  };

  handleFilterChange = e => {
    console.log(e.currentTarget.value);
    console.log(e.currentTarget.name);
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <InputSection onSubmit={this.handleFormSubmit} />
        <Filter
          items={this.state.contacts}
          onFilterChange={this.handleFilterChange}
        />
        <Contacts items={this.state.contacts} />
      </>
    );
  }
}
