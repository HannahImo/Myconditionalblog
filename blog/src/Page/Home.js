import React from "react";
import Menu from "../Header/Menu";
import Row2 from "../Header/Row2";
import Compinfo from "../Company comp/Compinfo";
import Partners from "../Partner Component/Partners";
import Advice from "../Advice component/Advice";
import Recent from "../Recent Component/Recent";
import Coaches from "../Land/Coaches";
import Footer from "../Footer component/Footer";

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
