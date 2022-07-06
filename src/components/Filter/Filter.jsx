import { Label, Title, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <Label htmlFor="">
      {' '}
      <Title>Find contacts by name :</Title>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </Label>
  );
};
