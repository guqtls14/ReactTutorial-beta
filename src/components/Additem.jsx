import React, { useState } from "react";

const Additem = ({ addItem }) => {
  const [data, setData] = useState("");

  //   addItem
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(data);
    setData("");
  };
  console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={data} onChange={(e) => setData(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  );
};
export default Additem;
