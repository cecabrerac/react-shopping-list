import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const itemsRem = [
    { id: 1, item: "Cheese", checked: true },
    { id: 2, item: "Milk", checked: false },
    { id: 3, item: "Rice", checked: false },
  ];
  return (
    <div className="App">
      <Header />
      <Content itemsRem={itemsRem} />
      <Footer />
    </div>
  );
};

export default App;

