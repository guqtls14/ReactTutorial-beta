import { useState } from "react";
import "./App.css";
export default function Picture() {
  const initialItems = [
    { title: "pretzels", id: 0 },
    { title: "crispy seaweed", id: 1 },
    { title: "granola bar", id: 2 },
  ];
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find((item) => item.id === selectedId);

  const handleItemChange = (id, e) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  };
  console.log(items);
  console.log(selectedItem);
  return (
    <>
      <h2>What's your travel snack?</h2>{" "}
      <ul>
        {items.map((item, idx) => {
          return (
            <li key={item.id}>
              <input
                value={item.title}
                onChange={(e) => handleItemChange(item.id, e)}
              />{" "}
              <button
                onClick={() => {
                  setSelectedId(item.id);
                }}
              >
                Choose
              </button>
            </li>
          );
        })}
      </ul>
      <p>{selectedItem.title}</p>
    </>
  );
}
