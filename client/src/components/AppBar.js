import React, { Component } from "react";
import NavLink from "./NavLink";

class AppBar extends Component {
  state = { clicked: false }
  
  handleClick = () => {
    this.setState({clicked:!this.state.clicked})
  }

  render() {
    return (
      <>
        <nav className="appbar">
          <h2 className="appbar_logo">Coolelat</h2>
          <div className="menu-bar" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>

          <ul className={this.state.clicked ? 'nav-links active' : 'nav-links'}>
            <li><NavLink href="/" text="Home" /></li>
            <li><NavLink href="/categories" text="Categories" /></li>
            <li><NavLink href="/about" text="About" /></li>
          </ul>
        </nav>
      </>
    )
  }
}

export default AppBar