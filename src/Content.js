import React from "react";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";

const Content = () => {
  const firstItems = [
    { id: 1, item: "Cheese", checked: true },
    { id: 2, item: "Milk", checked: false },
    { id: 3, item: "Rice", checked: false },
  ];

  const [items, setItems] = useState(firstItems);

  const handleCheck = (id) => {
    const itemsList = items.map((item) =>
      id === item.id ? { ...item, checked: !item.checked } : item,
    );
    setItems(itemsList);
  };

  return (
    <main>
      <div className="addItem">
        <input type="text" placeholder="Add Item" />
        <button>+</button>
      </div>
      <div className="searchItem">
        <input type="text" placeholder="Search Item" />
      </div>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              name="check"
              id="check"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label> {item.item}</label>
            <BsTrash role="button" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
