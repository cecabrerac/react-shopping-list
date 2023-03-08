import React from "react";
import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist") || null),
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header title="Shopping List" />
      <AddItem
        items={items}
        setItems={setItems}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase()),
        )}
        setItems={setItems}
        search={search}
        setSearch={setSearch}
      />
      <Footer />
    </div>
  );
};

export default App;



