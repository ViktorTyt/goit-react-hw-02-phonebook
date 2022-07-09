import PropTypes from 'prop-types';

import { Component } from 'react';
import {
  Form,
  Label,
  Title,
  Input,
  Button,
  Container,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
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
          <Label>
            <Title>Name</Title>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={({ currentTarget: { name, value } }) =>
                this.handleInputChange(name, value)
              }
            />
          </Label>
          <Label>
            <Title>Number</Title>
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={({ currentTarget: { name, value } }) =>
                this.handleInputChange(name, value)
              }
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </Container>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

// ======================================================
// import PropTypes from 'prop-types';

// import { Component } from 'react';
// import {
//   Form,
//   Label,
//   Title,
//   Input,
//   Button,
//   Container,
// } from './ContactForm.styled';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({
//       [name]: value,
//     });
//   };

//   reset = () => {
//     return this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <Container>
//         <Form action="" autocomplete="off" onSubmit={this.handleSubmit}>
//           <Label>
//             <Title>Name</Title>
//             <Input
//               type="text"
//               name="name"
//               value={this.state.name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.handleInputChange}
//             />
//           </Label>
//           <Label>
//             <Title>Number</Title>
//             <Input
//               type="tel"
//               name="number"
//               value={this.state.number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={this.handleInputChange}
//             />
//           </Label>
//           <Button type="submit">Add contact</Button>
//         </Form>
//       </Container>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
// };
