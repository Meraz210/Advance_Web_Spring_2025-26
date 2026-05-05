function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search by name or major..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{
        padding: "10px",
        width: "320px",
        margin: "20px auto",
        display: "block",
        borderRadius: "6px",
        border: "1px solid #ccc",
      }}
    />
  );
}

export default SearchBar;