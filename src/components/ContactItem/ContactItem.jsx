import { DeleteButton } from './ContactItem.styled';
export const ContactItem = ({ name, number, deleteItem }) => {
  return (
    <li>
      {name}: {number}{' '}
      <DeleteButton id={name} type="button" onClick={deleteItem}>
        x
      </DeleteButton>
    </li>
  );
};
