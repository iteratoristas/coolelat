import React, { useState } from "react";
import NavLink from "./NavLink";

function AppBar(){
  const [clicked, setClicked] = useState(false)

  function handleClicked() {
    setClicked(!clicked)
  }

    return (
      <>
        <nav className="appbar">
          <h2 className="appbar_logo">Coolelat</h2>
          <div className="menu-bar" onClick={handleClicked}>
            <i className={clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>

          <ul className={clicked ? 'nav-links active' : 'nav-links'}>
            <li><NavLink href="/" text="Home" /></li>
            <li><NavLink href="/categories" text="Categories" /></li>
            <li><NavLink href="/about" text="About" /></li>
          </ul>
        </nav>
      </>
    )
}

export default AppBar