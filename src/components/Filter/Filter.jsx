// import PropTypes from 'prop-types';
// import { Label, Title, FilterInput, Message } from './Filter.styled';

// export const Filter = ({ filter, contactsState, onFilterChange }) => {
//   return contactsState.length > 0 ? (
//     <Label>
//       <Title>Find contacts by name :</Title>
//       <FilterInput
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={({ target: { value } }) => onFilterChange(value)}
//       />
//     </Label>
//   ) : (
//     <Message>Your Phonebook is empty</Message>
//   );
// };

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   contactsState: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onFilterChange: PropTypes.func,
// };

// ==========================================
import PropTypes from 'prop-types';
import { Label, Title, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <Label>
      <Title>Find contacts by name :</Title>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={({ target: { value } }) => onFilterChange(value)}
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func,
};
