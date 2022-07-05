import { Component } from 'react';
import { nanoid } from 'nanoid';

import { InputSection } from 'components/InputSection/InputSection';
import { Contacts } from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleAddContact = e => {
    console.log(e);
    this.setState({
      contacts: [{ id: nanoid(), name: this.state.name }],
      name: '',
    });
    this.reset();
  };

  handleInput = e => {
    console.log(e.currentTarget);
    this.setState({ name: e.target.value });
  };

  reset = () => {
    return this.setState({
      name: '',
    });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <InputSection
          addContact={this.handleAddContact}
          makeInput={this.handleInput}
        />
        <Contacts />
      </>
    );
  }
}
