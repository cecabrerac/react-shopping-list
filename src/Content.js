import React from "react";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, item: "Cheese", checked: true },
    { id: 2, item: "Milk", checked: false },
    { id: 3, item: "Rice", checked: false },
  ]);
  
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item">
            <input type="checkbox" name="check" id="check" checked={item.checked}/>
            <label> {item.item}</label>
            <BsTrash role="button" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
