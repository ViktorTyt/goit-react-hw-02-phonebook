import {
  Form,
  Input,
  Button,
  FormContainer,
  Title,
} from './InputSection.styled';

export const InputSection = ({ makeInput, addContact }) => {
  return (
    <FormContainer>
      <Title>Contacts</Title>
      <Form action="">
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onInput={makeInput}
        />
        <Button type="button" onClick={addContact}>
          Add contact
        </Button>
      </Form>
    </FormContainer>
  );
};
