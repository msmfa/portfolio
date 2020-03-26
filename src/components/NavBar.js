import React from "react";

function NavBar() {
  return (
    <>
      <div className="nav-container">
        <ul>
          <li>About</li>
          <li>
            <a href="#proj">Projects</a>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
