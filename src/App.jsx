import { sculptureList } from "./data";

import React, { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  if (index >= sculptureList.length - 1) {
    setIndex(0);
  }
  const model = sculptureList[index];

  const PlusIndex = (e) => setIndex(index + 1);

  const Open = () => setOpen(!open);
  return (
    <div>
      <button onClick={PlusIndex}>Next</button>
      <h2>{model.name}</h2>
      <div>
        ({index + 1} of {sculptureList.length})
      </div>
      <button onClick={Open}>{open ? "Hide" : "Open"}</button>
      <p>{model.description}</p>
      {open && <img src={model.url} alt={model.alt} />}
    </div>
  );
};

export default App;
