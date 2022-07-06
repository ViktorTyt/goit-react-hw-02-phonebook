export const Filter = ({ filter, onFilterChange }) => {
  return (
    <label htmlFor="">
      {' '}
      Find contacts by name <br></br>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};
