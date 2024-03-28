import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

import { FaWhatsapp } from "react-icons/fa";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      {/* whatsapp btn */}

      <a
        href="https://wa.me/923211101911?text=Hey I want to create a website"
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          color: darkMode ? "white" : "green",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "0.7rem",
          // alignContent:"center",
          // height:"2rem",
        }}
      >
        <FaWhatsapp size={50} />
        Contact Me
      </a>
    </div>
  );
}

export default App;
