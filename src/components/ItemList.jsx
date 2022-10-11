import React from "react";

const ItemList = ({ item, onDelete, onCheck }) => {
  return (
    <ul>
      {item.map((a) => (
        <li key={a.id}>
          <label>
            <input
              type="checkbox"
              checked={a.packed}
              onChange={(e) =>
                onCheck({
                  ...a,
                  packed: e.target.checked,
                })
              }
            />
            {a.title}
          </label>
          <button onClick={() => onDelete(a.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
