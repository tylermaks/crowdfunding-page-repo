import React from "react"
import Hero from "./Hero";
import ProductInfo from "./ProductInfo";
import Modal from "./Modal"

import "../Assets/Styles/AppStyles/App.css"

function App() {
  return (
    <main className="App">
      <Modal />
      <Hero />
      <ProductInfo />
    </main>
  );
}

export default App;
