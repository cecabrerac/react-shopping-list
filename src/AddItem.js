import React from "react";

const AddItem = ({ items, setItems, newItem, setNewItem }) => {
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

  return (
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
  );
};

export default AddItem;
