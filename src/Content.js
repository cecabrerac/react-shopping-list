import React from "react";
import { BsTrash } from "react-icons/bs";

const Content = ({ items, setItems, search, setSearch }) => {
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

  return (
    <main>
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
