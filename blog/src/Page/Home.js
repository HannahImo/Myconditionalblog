import React from "react";
import Menu from "../Land/Header/Menu";
import Row2 from "../Land/Header/Row2";
import Compinfo from "../Land/Compinfo";
import Partners from "../Land/Partners";
import Advice from "../Land/Advice";
import Recent from "../Land/Recent";
import Coaches from "../Land/Coaches";
import Footer from "../Land/Footer";

function Home() {
  return (
    <div>
      <Menu />
      <Row2 />
      <Compinfo />
      <Partners />
      <Advice />
      <Recent />
      <Coaches />
      <Footer />
    </div>
  );
}

export default Home;
