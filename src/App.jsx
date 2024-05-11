import React, { useState, useEffect } from "react";
import ScrollToTop from './componentt/ScrollToTop'
import Home from './componentt/Home'
import Navbar from './componentt/Navbar'
import Free from './componentt/Free'
import Clients from './componentt/Clients'
import SuperRare from './componentt/SuperRare'
import Like from './componentt/Like'
import Signup from './componentt/Signup'
import "./sass/index.scss";
import Footer from './componentt/Footer'
import scrollreveal from "scrollreveal";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);

  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);

  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
     <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Like />
      <Signup />
      <Footer/>
    </div>
  )
}

export default App