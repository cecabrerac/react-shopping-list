import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const itemsRem = [
    { id: 1, item: "Item1", checked: true },
    { id: 2, item: "Item2", checked: false },
    { id: 3, item: "Item3", checked: false },
  ];
  return (
    <div className="mycontainer">
      <Header />
      <Content itemsRem={itemsRem} />
      <Footer />
    </div>
  );
};

export default App;
