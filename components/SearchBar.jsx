export default function SearchBar({ searchText, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={searchText}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
}