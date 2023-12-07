import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./data/annonces.json";
import Header from "../src/components/Header/Header";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";
import Error from "./pages/Error";
import Footer from "../src/components/Footer/Footer";
import "./style/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/logement/:id" element={<Logement data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
