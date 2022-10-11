import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  const [filterData, setFilterData] = useState(foods);
  return (
    <>
      <SearchBar filtering={filterItems} setFilterData={setFilterData} />
      <hr />
      <List items={filterData} />
    </>
  );
}

function SearchBar({ filtering, setFilterData }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
    const a = filtering(foods, e.target.value);
    setFilterData(a);
    // console.log("a: ", a);
  }
  console.log(query);
  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
