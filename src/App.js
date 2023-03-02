import React from "react";
import "./style.css";
import Header from './Header.js'
import Footer from './Footer.js'
import Content from './Content.js'

export default function App() {
  return (
    <div className='container'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}
