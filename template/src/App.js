import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Garagem from "./components/Garagem";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Garagem/>
      <Footer/>
    </div>
  );
}
