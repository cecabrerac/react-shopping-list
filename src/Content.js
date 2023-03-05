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
    localStorage.setItem("shoopinglist", JSON.stringify(itemsList));
  };

  const handleDelete = (id) => {
    const itemsList = items.filter((item) => item.id !== id);
    setItems(itemsList);
    localStorage.setItem("shoopinglist", JSON.stringify(itemsList));
  };

  const handleSearch = (text) => {
    console.log(text);
    // const itemsList = items.map((item) => item.item.contains(text));
    // setItems(itemsList);
  };

  return (
    <main>
      <div className="addItem">
        <input type="text" placeholder="Add Item" />
        <button>+</button>
      </div>
      <div className="searchItem">
        <input
          type="text"
          placeholder="Search Item"
          onChange={(e) => handleSearch(e.target.innerText)}
        />
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
            <BsTrash role="button" onClick={() => handleDelete(item.id)} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
