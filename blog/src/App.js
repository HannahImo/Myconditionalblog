import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./Header/Menu";
import Row2 from "./Header/Row2";
import Compinfo from "./Company comp/Compinfo";
import Partners from "./Partner Component/Partners";
import Advice from "./Advice component/Advice";
import Recent from "./Recent Component/Recent";
import Coaches from "./Land/Coaches";
import Footer from "./Footer component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
//call your card component here to display it in your home page.

function App() {
  // let social_Data = "Maxup"

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
