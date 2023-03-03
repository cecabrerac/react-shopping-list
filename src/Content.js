import React from "react";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";

const Content = ({ itemsRem }) => {
  const [variable, setVariable] = useState("");
  const handleButton = (name) => {
    setVariable(name + ": You have clicked the button");
  };

  return (
    <main>
      <ul>
        {itemsRem.map((item) => (
          <li className="item">
            <input type="checkbox" name="check" id="check" />
            <p> {item.item}</p>
            <BsTrash role="button" />
          </li>
        ))}
      </ul>
      <button onClick={() => handleButton("Carlos")}>Click me</button>
      <p>{variable}</p>
    </main>
  );
};

export default Content;
