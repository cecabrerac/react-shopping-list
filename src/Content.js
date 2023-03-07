import React from "react";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";

const Content = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || null )
    
  
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const handleCheck = (id) => {
    const itemsList = items.map((item) =>
      id === item.id ? { ...item, checked: !item.checked } : item,
    );
    setItems(itemsList);
    localStorage.setItem("shoppinglist", JSON.stringify(itemsList));
  };

  const handleDelete = (id) => {
    const itemsList = items.filter((item) => item.id !== id);
    setItems(itemsList);
    localStorage.setItem("shoppinglist", JSON.stringify(itemsList));
  };

  const handleAddItem = (e) => {
    //e.preventDefault();
    if (!newItem) return;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id: id, checked: false, item: newItem };
    const itemsList = [...items, myNewItem];
    setItems(itemsList);
    localStorage.setItem("shoppinglist", JSON.stringify(itemsList));
    setNewItem("");
  };

  const handleSearch = (text) => {
    console.log(text);
    // const itemsList = items.map((item) => item.item.contains(text));
    // setItems(itemsList);
  };

  return (
    <main>
      <form className="addItem" onSubmit={handleAddItem}>
        <input
          autoFocus
          type="text"
          id="addItem"
          placeholder="Add Item"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          type="submit"
          area-label="Add Item"
          onClick={(e) => handleAddItem(e.target.innerText)}
        >
          +
        </button>
      </form>
      <form className="searchItem" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="searchItem"
          role="searchbox"
          placeholder="Search Item"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {items.length ? (
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
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <BsTrash
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p
          style={{
            marginTop: "4rem",
            textAlign: "center",
            fontSize: "46px",
            color: "#fff",
          }}
        >
          Your list is empty
        </p>
      )}
    </main>
  );
};

export default Content;
