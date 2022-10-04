export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  const styles = {
    UI: {
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <form style={styles.UI}>
      <input
        onChange={(e) => onFilterTextChange(e.target.value)}
        value={filterText}
        type="text"
        placeholder="Search..."
        style={{ width: 209 }}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
}

// https://goddino.tistory.com/282
