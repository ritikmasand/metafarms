import React from "react";
import bootstrap from "bootstrap";
import img from "../../Assets/s1.png";
import ControlledCarousel from "./ControlledCarousel";
import { Container } from "react-bootstrap";
import NavBar from "../Shared/Navbar/Navbar";
import Fade from "react-reveal/Fade";
import Footer from "../Home/Footer/Footer";

const Aboutus = () => {
  return (
    <>
      <NavBar />

      <Container className="pt-4">
        <Fade duration={3000} left>
          <h1 className="headerTitle text-center container headerHighlight">
            <span className="headerHighlight">Meta Farms</span>
          </h1>
        </Fade>
        <Fade duration={3000} right>
          <ControlledCarousel />
        </Fade>

        <Fade duration={3000} left>
          <p className="headerContent img-fluid container">
            Plants grown in soil need more space for its roots to spread out as
            the roots reach out as far as possible into the soil to capture as
            much water and nutrients as possible. Soil holds water and nutrients
            for only few minutes before it is filtered down the water table, or
            gets soaked up by other plants nearby. That makes it nearly
            impossible to control exactly how much water each of your plants
            receive, or which nutrients they benefit from in the process.
            Hydroponics addresses this problem by eliminating soil and providing
            nutrient rich water directly to plant roots through efficient and
            modern systems. This helps save up to 90% of water and nutrients.
            Moreover, since the roots are not as spread out, plants can be grown
            closer to each other, thus increasing the productivity of the land.
          </p>
        </Fade>
      </Container>
      <Footer />
    </>
  );
};

export default Aboutus;
