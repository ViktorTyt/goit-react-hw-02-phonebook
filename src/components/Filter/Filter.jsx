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
