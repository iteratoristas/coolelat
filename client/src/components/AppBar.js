import React from "react";
import NavLink from "./NavLink";

export default function AppBar() {
  
  const navLinks = document.querySelector("nav-links")

  function showNav() {
    navLinks.classList.toggle("open")
  }

  // hamburger.addEventListener("click", () => {
  //   navLinks.classList.toggle("open")
  // })

  return (
    <>
    <nav className="appbar">
       <h2 className="appbar_logo">Coolelat</h2>
       <div className="hamburger" onClick={showNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <ul className="nav-links">
          <li><NavLink href="/" text="Home" /></li>
          <li><NavLink href="/categories" text="Categories"/></li>
          <li><NavLink href="/about" text="About"/></li>
        </ul>
      </nav>
      </>
  );
}
