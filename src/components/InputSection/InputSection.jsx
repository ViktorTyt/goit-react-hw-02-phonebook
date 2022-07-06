import { Component } from 'react';
import { Form, Input, Button, Container } from './InputSection.styled';

export class InputSection extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();

    // this.reset();
  };

  handleInputChange = e => {
    console.log(e.currentTarget.value);
    console.log(e.currentTarget.name);
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  reset = () => {
    return this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <Container>
        <Form action="" autocomplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            <Input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="">
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <Button type="submit">Add contact</Button>
        </Form>
      </Container>
    );
  }
}
