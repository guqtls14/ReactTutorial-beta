import React, { useState } from "react";
import Additem from "./components/Additem";
import ItemList from "./components/ItemList";

let itemIndex = 3;
const App = () => {
  const initialItems = [
    { id: 0, title: "Warm socks", packed: true },
    { id: 1, title: "Travel journal", packed: false },
    { id: 2, title: "Watercolors", packed: false },
  ];

  const [data, setData] = useState(initialItems);

  // filter packed number
  const packed = data.filter((item) => item.packed).length;

  // Add Item
  const onItem = (item) => {
    setData([...data, { id: itemIndex++, title: item, packed: false }]);
  };

  // onDelete
  const onDelete = (id) => {
    const newItem = data.filter((item) => item.id !== id);
    setData(newItem);
  };

  // check
  const onCheck = (nextItem) => {
    setData(
      data.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  };
  return (
    <>
      <Additem addItem={onItem} />
      <ItemList item={data} onDelete={onDelete} onCheck={onCheck} />
      <p>
        {packed} out of {data.length} packed!
      </p>
    </>
  );
};

export default App;
