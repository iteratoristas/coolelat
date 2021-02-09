import React from "react";
import NavLink from "./NavLink";

export default function AppBar() {
  return (
    <header className="appbar">
      <h2 className="appbar_logo">Coolelat</h2>
      <nav className="appbar_nav">
        <NavLink href="/" text="Home"/>
        <NavLink href="/categories" text="Categories"/>
        <NavLink href="/about" text="About"/>
      </nav>
    </header>
  );
}
