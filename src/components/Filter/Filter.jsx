export const Filter = ({ filter, onFilterChange }) => {
  return (
    <label htmlFor="">
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};
