import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <div className="nav-container">
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>CV</li>
          </ul>
        </div>
      </>
    );
  }
}

export default NavBar;
